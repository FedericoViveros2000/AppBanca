import { useEffect, useState } from 'react'
import { supabase } from '../supabase/index'
import { notifications } from '../utils/notifications'
import { TYPE_MOVEMENTS } from '../interfaces/enums/notifications'
import { formatCurrency } from '../utils/formatCurrency'
import { type RealtimeChannel } from '@supabase/supabase-js'
import { TABLES } from '../interfaces/enums/database/tables'
import { REALTIME } from '../interfaces/enums/realtime'

interface realtimeProps {
  table: string
}

interface newBalance {
  cardBalance: number
  idCardCustomer: number
}

const useRealtime = ({
  table = TABLES.CARD_BALANCE
}: realtimeProps): newBalance => {
  const [cardBalance, setCardBalance] = useState<newBalance>({
    cardBalance: 0,
    idCardCustomer: 0
  })

  const realtime = (): RealtimeChannel => {
    const realtimeBalance = supabase
      .channel(REALTIME.CHANNEL)
      .on(
        REALTIME.CHANGE,
        {
          event: REALTIME.UPDATE,
          schema: REALTIME.SCHEMA,
          table
        },
        (payload) => {
          setCardBalance({
            cardBalance: payload.new?.card_balance,
            idCardCustomer: payload.new?.id
          })
          notifications({
            cardBalance: formatCurrency(payload.new?.card_balance),
            typeMovement: TYPE_MOVEMENTS.DEBIT
          }).then(res => { console.log(res) }).catch(err => { console.log(err) })
        }
      )
      .subscribe()

    return realtimeBalance
  }

  useEffect(() => {
    realtime()
  }, [])

  return cardBalance
}

export { useRealtime }
