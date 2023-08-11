interface new_suscribe {
  card_balance: number
  created_at: string
  id: number
  id_custom: number
  type_card: 2
}

interface id_old {
  id: number
}

export interface supabaseSuscribe {
  commit_timestamp: string
  errors: string | null
  eventType: string
  new: new_suscribe
  old: id_old
  schema: string
  table: string
}
