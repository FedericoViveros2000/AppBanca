const NOTIFICATIONS = {
  DEFAULT: 'default',
  GRANTED: 'granted',
  DENIED: 'denied'
} as const

const TYPE_MOVEMENTS = {
  TRANSFER: 'CREDIT',
  DEBIT: 'DEBIT'
} as const

interface MOVEMENTS {
  readonly TRANSFER: 'CREDIT'
  readonly DEBIT: 'DEBIT'
}

export {
  NOTIFICATIONS,
  TYPE_MOVEMENTS,
  type MOVEMENTS
}
