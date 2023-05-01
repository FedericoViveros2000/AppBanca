import { supabase } from "../supabase";
import { Cards } from "../interfaces/cards.types";
import { Balance } from "../interfaces/balance.types";
import { TABLES, COLUMNS } from "../interfaces/enums/Tables";

//Metodo mediante el cual obtenemos las tarjetas
const getCards = async (): Promise<Cards[]> => {
  let { data: cards, error } = await supabase.from(TABLES.CARDS).select("*");
  if (error) throw new Error("Error al obtener las tarjetas");
  return cards || [];
};

//Metodo mediante el cual obtenemos los datos de las tarjetas relacionadas con el cliente
const getBalance = async (id_customer: number): Promise<Balance[]> => {  
  let { data: card_balance, error } = await supabase
    .from(TABLES.CARD_BALANCE)
    .select("*")
    .eq(COLUMNS.ID_CUSTOM, id_customer);
  if (error) throw new Error("Error al obtener el saldo de la tarjeta");
  return card_balance || [];
};

export { getCards, getBalance };
