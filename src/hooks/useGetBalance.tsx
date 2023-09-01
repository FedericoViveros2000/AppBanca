import { useEffect, useState } from 'react'
import { getTransactionsTypes } from '../utils/getDataCards'
import { type TotalData } from '../interfaces/balance'
import { TYPE_TRANSACTIONS } from '../interfaces/enums/transactions'
import { getDateDayMonth } from '../utils/Dates'
interface PropsGetBalance {
  idCustomer: number
}

interface Props {
  balanceAmount: TotalData
  isFetching: boolean
}

const useGetBalance = ({ idCustomer }: PropsGetBalance): Props => {
  const [isFetching, setIsFeching] = useState(false)
  const [balanceAmount, setBalanceAmount] = useState<TotalData>({
    totalCredit: 0,
    totalDebit: 0
  })

  const transactionCredit = async (): Promise<void> => {
    setIsFeching(true)
    try {
      const [totalDebit, totalCredit] = await Promise.all([
        getTransactionsTypes({
          typeTransaction: TYPE_TRANSACTIONS.DEBIT,
          idCustomer,
          firstDate: getDateDayMonth().first_date,
          lastDate: getDateDayMonth().last_date
        }),
        getTransactionsTypes({
          typeTransaction: TYPE_TRANSACTIONS.CREDIT,
          idCustomer,
          firstDate: getDateDayMonth().first_date,
          lastDate: getDateDayMonth().last_date
        })
      ])
      setBalanceAmount({
        totalCredit,
        totalDebit
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsFeching(false)
    }
  }

  useEffect(() => {
    transactionCredit()
      .then(() => {})
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return {
    balanceAmount,
    isFetching
  }
}

export { useGetBalance }
