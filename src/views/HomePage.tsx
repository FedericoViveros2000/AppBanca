import { BottomBar } from '../components/navigation/BottomBar'
import React from 'react'
import { NavBarDetailUser } from '../components/navigation/NavBarDetailUser'
import { TargetCards } from '../components/cards/TargetCards'
import { Spending } from '../components/cards/Spending'
import { ListTransaction } from '../components/transactions/ListTransactions'
import { BudgetCard } from '../components/cards/BudgetCard'
import { ContainerSlider } from '../components/cards/ContainerSlider'
import { useGetBalance } from '../hooks/useGetBalance'
import { useAuthContext } from '../context/AuthContext'
import { TITLES } from '../utils/data/HomeData'

const HomePage: React.FC = () => {
  const { auth } = useAuthContext()

  const { balanceAmount, isFetching } = useGetBalance({
    idCustomer: auth[0]?.id
  })

  return (
    <>
      <main className="container__main">
        <NavBarDetailUser name={auth[0]?.nombre} />
        <section className="container__section">
          <section className="section__separator container__cards scroll-none">
            <ContainerSlider>
              <TargetCards idCustomer={auth[0]?.id} />
            </ContainerSlider>
          </section>
          <section className="section__separator container__main--spending">
            {isFetching
              ? (
              <p>Cargando mi gente</p>
                )
              : (
              <Spending
                spending={balanceAmount?.total_debit || 0}
                income={balanceAmount?.total_credit || 0}
              />
                )}
          </section>
          <section className="section__separator">
            <ListTransaction />
          </section>
        </section>
      </main>
      <section className="section__separator container__main bg-light">
        <h3 className="font-dark fs-normal-md">{TITLES.MONTHLY_SUSCRIPTIONS}</h3>
        <article className="container__cards section__separator scroll-none">
          <ContainerSlider>
            <BudgetCard bgColor="bg-light-budget" />
          </ContainerSlider>
        </article>
      </section>
      <section className="container__section--budget bg-principal">
        <h4 className="font-light fs-normal-md">{TITLES.MONTHLY_SUSCRIPTIONS}</h4>
        <article className="container__cards section__separator scroll-none">
          <ContainerSlider>
            <BudgetCard bgColor="bg-light" />
          </ContainerSlider>
        </article>
      </section>
      <BottomBar />
    </>
  )
}

export default HomePage
