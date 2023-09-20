import React, { useEffect, useState } from 'react'
import { SESSIONSTORAGE } from '../../../interfaces/enums/storage'
// import { supabase } from '../../../supabase'
// import { notifications } from '../../../utils/notifications'
// import { TYPE_MOVEMENTS } from '../../../interfaces/enums/notifications'
import { HeaderTransferMoney } from '../components/HeaderTransferMoney'
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'
import { useViewTransition } from '../../../hooks/viewTransitions/useViewTransition'
import '../../../components/cards/styles/card.css'
import { ROUTE } from '../../../router/router'
import { supabase } from '../../../supabase'
// import { formatCurrency } from '../../../utils/formatCurrency'

const ReviewMoneyPage: React.FC = () => {
  const { viewNavigate } = useViewTransition()

  const [dataToTransfer, setDataToTransfer] = useState({
    amount: '',
    accountTransfered: {}
  })
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setDataToTransfer(
      JSON.parse(
        sessionStorage.getItem(SESSIONSTORAGE.AMOUNT_TRANSFER) as string
      )
    )
  }, [])
  const sendMoney = async (): Promise<void> => {
    setIsFetching(true)
    try {
      const { data, error } = await supabase
        .from('transactions')
        .insert([
          {
            amount: dataToTransfer?.amount,
            type_transfer: 2,
            account_to: 1,
            account_from: dataToTransfer?.accountTransfered
          }
        ])
        .select()
      if (error !== null) throw new Error(error as unknown as string)
      sessionStorage.setItem('new_sended', data[0]?.amount)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }
  return (
    <main className="bg-principal min-h-screen pb-1-5">
      <HeaderTransferMoney
        title="Review"
        handleBack={() => {
          viewNavigate(ROUTE.TRANSFERMONEY)
        }}
      />
      <section className="min-h-80 w-full px-1-5 flex items-center ">
        <article className="bg-light w-full  radius-md p-1-5 flex flex-column gap-1-5">
          <p className="font-regular fw-thin font-grey">Amount</p>
          <p className="font-regular fw-thin font-grey">To:</p>
          <div className="flex items-center">
            <figure className="rounded-full storie mr-1">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
                className="image rounded-full "
              />
            </figure>
            <p>Nombre del enviado</p>
          </div>
          <p className="font-regular fw-thin font-grey">From:</p>
          <li className="container__target--card radius-md relative bg-principal p-1  font-light">
            <div className="flex space-between items-center">
              <p className="font-light">Madiri Platinum</p>
              <p className="font-light">VISA</p>
            </div>
            <div className="mt-2">
              <p className="title-balance font-light fw-normal mt-1">
                Keysuya Balance
              </p>
              <div className="flex space-between mt-1">
                <p className="font-light fw-normal">000000000000</p>
                <p className="font-light fw-normal">000</p>
              </div>
            </div>
          </li>
          <div className="w-full" onClick={sendMoney}>
            <ButtonPrimary title="Send" isFetching={isFetching} />
          </div>
        </article>
      </section>
    </main>
  )
}

export default ReviewMoneyPage
