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
  totalCredit: number | null
  totalDebit: number | null
}

export type TypeTransaction = 'Credit' | 'Debit'

export interface TypesTransactions {
  typeTransaction: TypeTransaction
  idCustomer: number
  firstDate: string
  lastDate: string
}

export interface TransactionSucess {
  success: boolean
  amount: string
}
