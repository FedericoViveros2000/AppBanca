import { supabase } from '../supabase'
import { FUNCTIONS } from '../interfaces/enums/functions'
import { type Cards } from '../interfaces/cards'
import { type Balance, type TypesTransactions } from '../interfaces/balance'
import { TABLES } from '../interfaces/enums/database/tables'
import { COLUMNS } from '../interfaces/enums/database/columns'
import { TYPE_TRANSACTIONS } from '../interfaces/enums/transactions'

let FUNCTION = ''

// Metodo mediante el cual obtenemos las tarjetas
const getCards = async (idCustomer: number): Promise<Cards[]> => {
  const { data: cards, error } = await supabase.rpc(FUNCTIONS.GETCARDS, {
    id_cliente: idCustomer
  })
  if (error != null) throw new Error('Error al obtener las tarjetas')
  return cards
}

// Metodo mediante el cual obtenemos los datos de las tarjetas relacionadas con el cliente
const getBalance = async (idCustomer: number): Promise<Balance[]> => {
  const { data: cardBalance, error } = await supabase
    .from(TABLES.CARD_BALANCE)
    .select(COLUMNS.ALL)
    .eq(COLUMNS.ID_CUSTOM, idCustomer)
  if (error != null) throw new Error('Error al obtener el saldo de la tarjeta')
  return cardBalance
}

const getTransactionsTypes = async ({
  idCustomer,
  typeTransaction,
  firstDate,
  lastDate
}: TypesTransactions): Promise<number> => {
  if (typeTransaction === TYPE_TRANSACTIONS.CREDIT) {
    FUNCTION = FUNCTIONS.GETTRANSACTIONCREDIT
  } else {
    FUNCTION = FUNCTIONS.GETTRANSACTIONDEBIT
  }

  const { data: cardTransaction, error } = await supabase.rpc(FUNCTION, {
    id_cliente: idCustomer,
    fecha_inicio: firstDate,
    fecha_fin: lastDate
  })

  if (error != null) {
    throw new Error('Error al obtener los movimientos del cliente')
  }
  return cardTransaction
}

export { getCards, getBalance, getTransactionsTypes }
