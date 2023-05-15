enum VIEWS {
    TRANSACTION_DEBIT = 'total_transaction_debit',
    TRANSACTION_CREDIT = 'total_transaction_credit'
}
enum TABLES {
    CUSTOMERS = 'clientes',
    CARD_BALANCE = 'card_balance',
    CARDS = 'cards',
    TRANSACTIONS = 'transactions'
}

enum COLUMNS{
    DOCUMENT = 'nro_documento',
    ID_CUSTOM = 'id_custom',
    CUSTOM_ID_TRANSFERED = 'custom_id',
    PASSWORD = 'password'
}

export {
    TABLES,
    COLUMNS,
    VIEWS
}
