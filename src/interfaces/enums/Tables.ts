const VIEWS = {
  TRANSACTION_DEBIT: "total_transaction_debit",
  TRANSACTION_CREDIT: "total_transaction_credit",
} as const;

const TABLES = {
  CUSTOMERS: "clientes",
  CARD_BALANCE: "card_balance",
  CARDS: "cards",
  TRANSACTIONS: "transactions",
} as const;

const COLUMNS = {
  DOCUMENT: "nro_documento",
  ID_CUSTOM: "id_custom",
  CUSTOM_ID_TRANSFERED: "custom_id",
  PASSWORD: "password",
} as const;

export { TABLES, COLUMNS, VIEWS };
