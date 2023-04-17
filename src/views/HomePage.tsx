import BottomBar from "../components/navigation/BottomBar";
import NavBarDetailUser from "../components/navigation/NavBarDetailUser";
import TargetCards from "../components/cards/TargetCards";
import Spending from "../components/cards/Spending";
import ListTransaction from "../components/transactions/ListTransactions";
import BudgetCard from "../components/cards/BudgetCard";
import ContainerSlider from "../components/cards/ContainerSlider";
const HomePage = () => {
  /*useEffect(() => {
if (!localStorage.getItem('userData')) {
window.location.assign('/')
}
}, [])*/

  return (
    <>
      <main className="container__main--home">
        <NavBarDetailUser />
        <section className="container__section">
          <section className="section__separator container__cards">
            <ContainerSlider>
              <TargetCards />
            </ContainerSlider>
          </section>
          <section className="section__separator container__main--spending">
            <Spending />
          </section>
          <section className="section__separator">
            <ListTransaction />
          </section>
        </section>
        <section className="section__separator bg-light">
        <h3 className="font-dark font-regular-text-bold">Monthly Budget</h3>
        <article className="container__cards section__separator">
          <ContainerSlider>
            <BudgetCard bgColor="bg-light-budget"/>
          </ContainerSlider>
        </article>
      </section>
      </main>
      <section className="container__section--budget bg-principal">
        <h3 className="font-light font-regular-text-bold">Monthly Subscriptions</h3>
        <article className="container__cards section__separator">
          <ContainerSlider>
            <BudgetCard bgColor="bg-light"/>
          </ContainerSlider>
        </article>
      </section>
      <BottomBar />
    </>
  );
};

export default HomePage;
