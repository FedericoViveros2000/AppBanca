import { useEffect, useState } from "react";
import { Cards } from "../interfaces/cards.types";
import { Balance } from "../interfaces/balance.types";
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
    getCards()
      .then((res: Cards[]) => {
        getBalance(id_customer)
          .then((balance: Balance[]) => {
            setData([
              {
                id: res[0].id,
                card_color: res[0].card_color,
                card_title: res[0].card_title,
                card_balance: balance[0].card_balance,
                card_supplier: res[0].card_supplier,
                error: null,
              },
            ]);
        }).finally(() => setIsLoading(false));;
      })
      .catch((err) => console.log(err))
  }, []);

  return {
    isLoading,
    data,
  };
};

export { useGetCards };
