import { supabase } from '../supabase'
import { FUNCTIONS } from '../interfaces/enums/Functions'
import { type Cards } from '../interfaces/cards.types'
import {
  type Balance,
  type TypesTransactions
} from '../interfaces/balance.types'
import { TABLES } from '../interfaces/enums/database/tables'
import { COLUMNS } from '../interfaces/enums/database/columns'
import { TYPE_TRANSACTIONS } from '../interfaces/enums/Transactions'

let FUNCTION = ''

// Metodo mediante el cual obtenemos las tarjetas
const getCards = async (id_customer: number): Promise<Cards[]> => {
  const { data: cards, error } = await supabase.rpc(FUNCTIONS.GETCARDS, {
    id_cliente: id_customer
  })
  if (error != null) throw new Error('Error al obtener las tarjetas')
  return cards || []
}

// Metodo mediante el cual obtenemos los datos de las tarjetas relacionadas con el cliente
const getBalance = async (id_customer: number): Promise<Balance[]> => {
  const { data: card_balance, error } = await supabase
    .from(TABLES.CARD_BALANCE)
    .select(COLUMNS.ALL)
    .eq(COLUMNS.ID_CUSTOM, id_customer)
  if (error != null) throw new Error('Error al obtener el saldo de la tarjeta')
  return card_balance || []
}

const getTransactionsTypes = async ({
  id_customer,
  type_transaction,
  first_date,
  last_date
}: TypesTransactions): Promise<number> => {
  if (type_transaction == TYPE_TRANSACTIONS.CREDIT) {
    FUNCTION = FUNCTIONS.GETTRANSACTIONCREDIT
  } else {
    FUNCTION = FUNCTIONS.GETTRANSACTIONDEBIT
  }

  const { data: card_transaction, error } = await supabase.rpc(FUNCTION, {
    id_cliente: id_customer,
    fecha_inicio: first_date,
    fecha_fin: last_date
  })

  if (error != null) throw new Error('Error al obtener los movimientos del cliente')
  return card_transaction || null
}

export { getCards, getBalance, getTransactionsTypes }
