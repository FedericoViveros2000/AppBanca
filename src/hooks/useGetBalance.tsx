import { useEffect, useState } from 'react'
import { getTransactionsTypes } from '../utils/getDataCards'
import { type TotalData } from '../interfaces/balance'
import { TYPE_TRANSACTIONS } from '../interfaces/enums/transactions.d.ts'
import { getDateDayMonth } from '../utils/Dates'
interface PropsGetBalance {
  idCustomer: number
}

const useGetBalance = ({ idCustomer }: PropsGetBalance) => {
  const [isFetching, setIsFeching] = useState(false)
  const [balanceAmount, setBalanceAmount] = useState<TotalData>({
    totalCredit: 0,
    totalDebit: 0
  })

  const transactionCredit = async (): Promise<void> => {
    setIsFeching(true)
    getTransactionsTypes({
      type_transaction: TYPE_TRANSACTIONS.DEBIT,
      idCustomer,
      first_date: getDateDayMonth().first_date,
      last_date: getDateDayMonth().last_date
    })
      .then((totalDebit) => {
        getTransactionsTypes({
          type_transaction: TYPE_TRANSACTIONS.CREDIT,
          idCustomer,
          first_date: getDateDayMonth().first_date,
          last_date: getDateDayMonth().last_date
        }).then((totalCredit) => {
          setBalanceAmount({
            totalCredit,
            totalDebit
          })
        }).catch(err => { console.log(err) })
      })
      .finally(() => {
        setIsFeching(false)
      })
  }

  useEffect(() => {
    transactionCredit().then(() => { }).catch(err => { console.log(err) })
  }, [])

  return {
    balanceAmount,
    isFetching
  }
}

export { useGetBalance }
