import "./styles/MenuTransactions.css";
import { Link } from "react-router-dom";

interface Props {
  showMenu: string;
  mostrarMenu: () => void;
}
function MenuTransactions({ showMenu, mostrarMenu }: Props) {
  return (
    <div className={`menu-transactions ${showMenu}`}>
      <article className={`menu-transaction ${showMenu}`}>
        <div className="flex items-center space-between mb-1">
          <h3 className="font-blue fw-bold fs-normal-md">Add Transaction</h3>
          <p onClick={mostrarMenu} className="font-active fw-bold">
            Close
          </p>
        </div>
        <ul className="grid">
          <li className="item-menu bg-light-grey">
            <Link to="/SendMoney">Enviar dinero</Link>
          </li>
          <li className="item-menu bg-light-grey"></li>
          <li className="item-menu bg-light-grey"></li>
          <li className="item-menu bg-light-grey"></li>
        </ul>
      </article>
    </div>
  );
}

export { MenuTransactions };
