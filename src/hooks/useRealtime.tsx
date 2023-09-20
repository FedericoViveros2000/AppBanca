import { useEffect, useState } from 'react'
import { supabase } from '../supabase/index'
import { type RealtimeChannel } from '@supabase/supabase-js'
import { TABLES } from '../interfaces/enums/database/tables'
import { REALTIME } from '../interfaces/enums/realtime'
import { notifications } from '../utils/notifications'
import { TYPE_MOVEMENTS } from '../interfaces/enums/notifications'
import { transactionsRealTime } from '../utils/getTransactionsRealTime'

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
          console.log(payload)

          setCardBalance({
            cardBalance: payload.new?.card_balance,
            idCardCustomer: payload.new?.id
          })
        }
      )
      .subscribe()

    return realtimeBalance
  }

  useEffect(() => {
    console.log(cardBalance.cardBalance)

    if (cardBalance.cardBalance !== 0) {
      console.log(sessionStorage.getItem('new_sended'))

      transactionsRealTime()
        .then(async (res) => {
          console.log(res)
          if (res.success) {
            await notifications({
              cardBalance: res.amount,
              typeMovement: TYPE_MOVEMENTS.DEBIT
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    realtime()
  }, [cardBalance])

  return cardBalance
}

export { useRealtime }
