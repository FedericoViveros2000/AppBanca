import BottomBar from "../components/navigation/BottomBar";
import NavBarDetailUser from "../components/navigation/NavBarDetailUser";
import TargetCards from "../components/cards/TargetCards";
import Spending from "../components/cards/Spending";
import ListTransaction from "../components/transactions/ListTransactions";
import BudgetCard from "../components/cards/BudgetCard";
import ContainerSlider from "../components/cards/ContainerSlider";
import { useGetBalance } from "../hooks/useGetBalance";
import { useContext } from "react";
import { Context } from "../context/AuthContext";
import { AuthContext } from "../interfaces/authContext.types";

const HomePage = () => {
  const auth : AuthContext['auth'] = useContext(Context);  
  const { balanceAmount, isFetching } = useGetBalance();

  return (
    <>
      <main className="container__main">
        <NavBarDetailUser name={auth[0]?.nombre} />
        <section className="container__section">
          <section className="section__separator container__cards scroll-none">
            <ContainerSlider>
              <TargetCards />
            </ContainerSlider>
          </section>
          <section className="section__separator container__main--spending">
            {isFetching ? (
              <p>Cargando mi gente</p>
            ) : (
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
        <section className="section__separator bg-light">
          <h3 className="font-dark font-regular-text-bold">Monthly Budget</h3>
          <article className="container__cards section__separator scroll-none">
            <ContainerSlider>
              <BudgetCard bgColor="bg-light-budget" />
            </ContainerSlider>
          </article>
        </section>
      </main>
      <section className="container__section--budget bg-principal">
        <h3 className="font-light font-regular-text-bold">
          Monthly Subscriptions
        </h3>
        <article className="container__cards section__separator scroll-none">
          <ContainerSlider>
            <BudgetCard bgColor="bg-light" />
          </ContainerSlider>
        </article>
      </section>
      <BottomBar />
    </>
  );
};

export default HomePage;
