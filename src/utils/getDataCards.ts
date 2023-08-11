import { supabase } from '../supabase'
import { FUNCTIONS } from '../interfaces/enums/functions.d.ts'
import { type Cards } from '../interfaces/cards.d.ts'
import {
  type Balance,
  type TypesTransactions
} from '../interfaces/balance'
import { TABLES } from '../interfaces/enums/database/tables.d.ts'
import { COLUMNS } from '../interfaces/enums/database/columns.d.ts'
import { TYPE_TRANSACTIONS } from '../interfaces/enums/transactions.d.ts'

let FUNCTION = ''

// Metodo mediante el cual obtenemos las tarjetas
const getCards = async (idCustomer: number): Promise<Cards[]> => {
  const { data: cards, error } = await supabase.rpc(FUNCTIONS.GETCARDS, {
    id_cliente: idCustomer
  })
  if (error != null) throw new Error('Error al obtener las tarjetas')
  return cards || []
}

// Metodo mediante el cual obtenemos los datos de las tarjetas relacionadas con el cliente
const getBalance = async (idCustomer: number): Promise<Balance[]> => {
  const { data: card_balance, error } = await supabase
    .from(TABLES.CARD_BALANCE)
    .select(COLUMNS.ALL)
    .eq(COLUMNS.ID_CUSTOM, idCustomer)
  if (error != null) throw new Error('Error al obtener el saldo de la tarjeta')
  return card_balance || []
}

const getTransactionsTypes = async ({
  idCustomer,
  type_transaction,
  first_date,
  last_date
}: TypesTransactions): Promise<number> => {
  if (type_transaction === TYPE_TRANSACTIONS.CREDIT) {
    FUNCTION = FUNCTIONS.GETTRANSACTIONCREDIT
  } else {
    FUNCTION = FUNCTIONS.GETTRANSACTIONDEBIT
  }

  const { data: card_transaction, error } = await supabase.rpc(FUNCTION, {
    id_cliente: idCustomer,
    fecha_inicio: first_date,
    fecha_fin: last_date
  })

  if (error != null) throw new Error('Error al obtener los movimientos del cliente')
  return card_transaction || null
}

export { getCards, getBalance, getTransactionsTypes }
