import { supabase } from "../supabase";
import { Cards } from "../interfaces/cards.types";
import { Balance, Transactions, TypesTransactions } from "../interfaces/balance.types";
import { TABLES, COLUMNS, VIEWS } from "../interfaces/enums/Tables";

let TABLE ="";

//Metodo mediante el cual obtenemos las tarjetas
const getCards = async (): Promise<Cards[]> => {
  const { data: cards, error } = await supabase.from(TABLES.CARDS).select("*");
  if (error) throw new Error("Error al obtener las tarjetas");
  return cards || [];
};

//Metodo mediante el cual obtenemos los datos de las tarjetas relacionadas con el cliente
const getBalance = async (id_customer: number): Promise<Balance[]> => {
  const { data: card_balance, error } = await supabase
    .from(TABLES.CARD_BALANCE)
    .select("*")
    .eq(COLUMNS.ID_CUSTOM, id_customer);
  if (error) throw new Error("Error al obtener el saldo de la tarjeta");
  return card_balance || [];
};

const getTransactionsTypes = async ({
  id_customer,
  type_transaction
}: TypesTransactions): Promise<Transactions[]> => {
  
  if (type_transaction == 'Credit') {
    TABLE = VIEWS.TRANSACTION_CREDIT;
  }else{
    TABLE = VIEWS.TRANSACTION_DEBIT;
  }

  const { data: card_transaction, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq(COLUMNS.CUSTOM_ID_TRANSFERED, id_customer);
    console.log(card_transaction);

    console.log(card_transaction);
    
    
  if (error) throw new Error("Error al obtener los movimientos del cliente");
  return card_transaction || null;
};

export { getCards, getBalance, getTransactionsTypes };
