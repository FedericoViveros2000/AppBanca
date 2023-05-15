import "./styles/spending.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { formatCurrency } from "../../utils/formatCurrency";
interface Props {
  spending?: number;
  income?: number;
}

const Spending = ({ spending, income }: Props) => {
  return (
    <section className="flex">
      <article className="spending flex items-center">
        <span className="icon bg-spending-color">
          <BsArrowUp className="icon-spending" />
        </span>
        <div>
          <p className="font-grey fs-normal">Spending</p>
          <p className="fw-bold">{formatCurrency(spending)}</p>
        </div>
      </article>
      <article className="spending flex items-center">
        <span className="icon bg-income-color">
          <BsArrowDown className="icon-spending" />
        </span>
        <div>
          <p className="font-grey fs-normal">Income</p>
          <p className="fw-bold">{formatCurrency(income)}</p>
        </div>
      </article>
    </section>
  );
};

export default Spending;
