import "./styles/transactions.css";
import { MdWork } from "react-icons/md";

function ListTransaction() {
  return (
    <article className="container__transations">
      <div className="container__transactions--title">
        <h2 className="font-blue fw-bold fs-normal-md">Transactions</h2>
        <p className="font-active fw-bold">See All</p>
      </div>
      <ul className="container__items">
        <li className="items">
          <div className="container__info">
            <figure className="items__icon">
              <MdWork />
            </figure>
            <p>
              Freelance Work
              <span className="date__transaction">Apr 28</span>
            </p>
          </div>
          <p>+2600</p>
        </li>
        <li className="items">
          <div className="container__info">
            <figure className="items__icon">
              <MdWork />
            </figure>
            <p>
              Freelance Work
              <span className="date__transaction">Apr 28</span>
            </p>
          </div>
          <p>+2600</p>
        </li>
        <li className="items">
          <div className="container__info">
            <figure className="items__icon">
              <MdWork />
            </figure>
            <p>
              Freelance Work
              <span className="date__transaction">Apr 28</span>
            </p>
          </div>
          <p>+2600</p>
        </li>
      </ul>
    </article>
  );
}

export { ListTransaction };
