import { useEffect, useState } from 'react'
import { supabase } from '../supabase/index'
import { notifications } from '../utils/notifications'
import { TYPE_MOVEMENTS } from '../interfaces/enums/Notifications'
import { formatCurrency } from '../utils/formatCurrency'
import { type RealtimeChannel } from '@supabase/supabase-js'
interface realtimeProps {
  table: string
}

const useRealtime = ({
  table = 'card_balance'
}: realtimeProps) => {
  const [data, setData] = useState({
    card_balance: 0
  })

  const realtime = (): RealtimeChannel => {
    const realtimeBalance = supabase
      .channel('table-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table
        },
        (payload) => {
          setData({
            card_balance: payload.new?.card_balance
          })
          notifications({
            cardBalance: formatCurrency(payload.new?.card_balance),
            typeMovement: TYPE_MOVEMENTS.DEBIT
          }).then(res => { console.log(res) }).catch(err => { console.log(err) }
          )
        }
      )
      .subscribe()

    return realtimeBalance
  }

  useEffect(() => {
    realtime()
  }, [])

  return {
    data
  }
}

export { useRealtime }
