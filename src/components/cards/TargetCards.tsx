import { useGetCards } from "../../hooks/useGetCards";
import TargetCardLoader from "./TargetCardLoader";
import { Cards } from "../../interfaces/cards.types";

interface Data {
  data: Cards[];
  isLoading: boolean;
}

const TargetCards = () => {
  let { isLoading, data }: Data = useGetCards();

  if (isLoading) {
    return <TargetCardLoader/>;
  }    
  return (
    <>
      {data?.map((card) => (
          <li
          style={{
              backgroundColor: card.card_color || "blueviolet"
            }}
            className="container__target--card relative target  font-light"
            key={card.id}
            >
          <div className="flex space-between items-center">
            <p>{card.card_title}</p>
            <p>{card.card_supplier}</p>
          </div>
          <div className="container__target--balance">
            <p className="title-balance fw-normal">Balance</p>
            <h2 className="font-regular-title-large fw-normal">$ 6,800.86</h2>
          </div>
        </li>
      ))}
    </>
  );
};

export default TargetCards;
