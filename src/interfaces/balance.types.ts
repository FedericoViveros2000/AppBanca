export interface Balance {
  id_custom: number
  id: number
  card_balance: number
  type_card: number
}
export type Total = number | null

export interface Transactions {
  total: Total
}

export interface TotalData {
  total_credit: number | null
  total_debit: number | null
}

export type TypeTransaction = 'Credit' | 'Debit'

export interface TypesTransactions {
  type_transaction: TypeTransaction
  id_customer: number
  first_date: string
  last_date: string
}
