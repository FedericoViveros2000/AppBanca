import React, { useEffect, useState } from 'react'
import { useViewTransition } from '../../../hooks/viewTransitions/useViewTransition'
import { ROUTE } from '../../../router/router'
import { HeaderTransferMoney } from '../components/HeaderTransferMoney'
import { SESSIONSTORAGE } from '../../../interfaces/enums/storage'
import { KeyBoard } from '../../../components/keyboard/Keyboard'
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'

const key = [
  {
    id: 1,
    number: 1
  },
  {
    id: 2,
    number: 2
  },
  {
    id: 3,
    number: 3
  },
  {
    id: 4,
    number: 4
  },
  {
    id: 5,
    number: 5
  },
  {
    id: 6,
    number: 6
  },
  {
    id: 7,
    number: 7
  },
  {
    id: 8,
    number: 8
  },
  {
    id: 9,
    number: 9
  }
]

const TransferMoneyPage: React.FC = () => {
  const [amount, setAmount] = useState([0])
  const [account, setAccount] = useState('')
  const { viewNavigate } = useViewTransition()
  const handleBackCancel = (): void => {
    sessionStorage.removeItem(SESSIONSTORAGE.USER_TRANSFER)
    sessionStorage.removeItem(SESSIONSTORAGE.AMOUNT_TRANSFER)
    viewNavigate(ROUTE.CONTACTSSENDMONEY)
  }

  const handleNumberSelected = (value: number): void => {
    if (amount[0] === 0) {
      setAmount([value])
      return
    }
    setAmount([...amount, value])
  }

  const sendMoney = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault()
    console.log(sessionStorage.getItem(SESSIONSTORAGE.USER_TRANSFER))

    sessionStorage.setItem(
      SESSIONSTORAGE.AMOUNT_TRANSFER,
      JSON.stringify({
        accountTransfered: account,
        amount: amount?.join('')
      })
    )

    viewNavigate(ROUTE.REVIEWMONEYPAGE)
  }

  useEffect(() => {
    console.log(sessionStorage.getItem(SESSIONSTORAGE.USER_TRANSFER))
    const sessionData = sessionStorage.getItem(SESSIONSTORAGE.USER_TRANSFER)
    if (sessionData === null) {
      viewNavigate(ROUTE.CONTACTSSENDMONEY)
    }

    const sessionAmount = sessionStorage.getItem(
      SESSIONSTORAGE.AMOUNT_TRANSFER
    )
    setAccount(JSON.parse(sessionData as string).account)
    if (sessionAmount !== null) {
      setAmount(JSON.parse(sessionAmount)?.amount)
    }
  }, [])

  return (
    <main className="bg-principal h-screen">
      <HeaderTransferMoney
        title="Send money to"
        handleBack={handleBackCancel}
      />
      <form onSubmit={sendMoney}>
        <section className="h-2-4 flex items-center justify-center">
          <p className="text-center font-light fs-normal-xl fw-semibold">
            {amount}
          </p>
        </section>
        <section className="fixed bg-light p-1 radius-top-left radius-top-right bottom-0 h-1-2 w-full">
          <KeyBoard
            background="red"
            keys={key}
            handleClick={handleNumberSelected}
          />
          <ButtonPrimary title="Next" isFetching={false} />
        </section>
      </form>
    </main>
  )
}

export default TransferMoneyPage
