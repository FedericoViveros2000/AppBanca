import { useEffect, useState } from 'react'
import { getTransactionsTypes } from '../utils/getDataCards'
import { type TotalData } from '../interfaces/balance'
import { TYPE_TRANSACTIONS } from '../interfaces/enums/Transactions'
import { getDateDayMonth } from '../utils/Dates'
interface PropsGetBalance {
  id_customer: number
}

const useGetBalance = ({ id_customer }: PropsGetBalance) => {
  const [isFetching, setIsFeching] = useState(false)
  const [balanceAmount, setBalanceAmount] = useState<TotalData>({
    total_credit: 0,
    total_debit: 0
  })

  const transactionCredit = () => {
    setIsFeching(true)
    getTransactionsTypes({
      type_transaction: TYPE_TRANSACTIONS.DEBIT,
      id_customer,
      first_date: getDateDayMonth().first_date,
      last_date: getDateDayMonth().last_date
    })
      .then((total_debit) => {
        console.log(id_customer)

        getTransactionsTypes({
          type_transaction: TYPE_TRANSACTIONS.CREDIT,
          id_customer,
          first_date: getDateDayMonth().first_date,
          last_date: getDateDayMonth().last_date
        }).then((total_credit) => {
          console.log(total_credit)
          setBalanceAmount({
            total_credit,
            total_debit
          })
        })
      })
      .finally(() => {
        setIsFeching(false)
      })
  }

  useEffect(() => {
    transactionCredit()
  }, [])

  return {
    balanceAmount,
    isFetching
  }
}

export { useGetBalance }
