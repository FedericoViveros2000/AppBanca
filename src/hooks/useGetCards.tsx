import { useEffect, useState } from "react";
import { Cards } from "../interfaces/cards";
import { Balance } from "../interfaces/balance";
import { getCards, getBalance } from "../utils/getDataCards";

type params = {
  id_customer: number;
};

const INITIAL_VALUE = [
  {
    id: 0,
    card_color: null,
    card_supplier: "",
    card_title: "",
    card_balance: 0,
    error: null,
  },
];

const useGetCards = ({ id_customer }: params) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Cards[]>(INITIAL_VALUE);

  useEffect(() => {
    setIsLoading(true);
    //Obteniendo los datos de la tarjeta con el balance de esta
    getCards(id_customer)
      .then((res: Cards[]) => {
        const data = res?.map((card) => {
          return {
            id: card.id,
            card_color: card.card_color,
            card_title: card.card_title,
            card_balance: card.card_balance,
            card_supplier: card.card_supplier,
            error: null,
          };
        });                
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    data,
  };
};

export { useGetCards };
