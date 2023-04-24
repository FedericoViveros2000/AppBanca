import { useEffect, useState } from "react";
import { supabase } from "../supabase/index";
import { Cards } from "../interfaces/cards.types";

const INITIAL_VALUE = [
  {
    id: 0,
    card_color: null,
    card_supplier: "",
    card_title: "",
    error: null
  },
];

const useGetCards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Cards[]>(INITIAL_VALUE);

  const getCards = async (): Promise<Cards[]> => {
    setIsLoading(true);
    let { data: cards, error } = await supabase.from("cards").select("*");
    if (error) throw new Error("Error al obtener las tarjetas");
    return cards || [];
  };

  useEffect(() => {
    getCards()
      .then((res) => {
        setData(res);
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
