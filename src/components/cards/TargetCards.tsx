import "./styles/card.css";
import { useGetCards } from "../../hooks/useGetCards";
import TargetCardLoader from "./TargetCardLoader";
import { Cards } from "../../interfaces/cards.types";
import { formatCurrency } from "../../utils/formatCurrency";
import { useRealtime } from "../../hooks/useRealtime";

interface Data {
  data: Cards[];
  isLoading: boolean;
}

const TargetCards = () => {
  const { id } = JSON.parse(localStorage.getItem("userData") as string)[0];
  const {data: newBalance} = useRealtime({
    eventType: 'UPDATE',
    table: 'card_balance'
  });
  const { isLoading, data }: Data = useGetCards({ id_customer: id });
  if (isLoading) return 
  
  
  
  
  
  
  
  
  
  
  <TargetCardLoader />;

  return (
    <>
      {data?.map((card) => (
        <li
          style={{
            backgroundColor: card.card_color || "blueviolet",
          }}
          className={`'container__target--card relative target font-light' ${
            data.length === 1 ? "min-w-100" : "min-w-90"
          }`}
          key={card.id}
        >
          <div className="flex space-between items-center">
            <p className="font-light">{card.card_title}</p>
            <p className="font-light">{card.card_supplier}</p>
          </div>
          <div className="container__target--balance">
            <p className="title-balance font-light fw-normal">Balance</p>
            <h2 className="font-regular-title-large font-light fw-normal">
              {/* {formatCurrency(card.card_balance)} */}
              {formatCurrency(newBalance?.card_balance || data[0].card_balance)}
            </h2>
          </div>
        </li>
      ))}
    </>
  );
};

export default TargetCards;
