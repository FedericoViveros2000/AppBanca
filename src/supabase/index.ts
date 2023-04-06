import { createClient } from '@supabase/supabase-js'
import { Database } from '../interfaces/database.types'
const {
  VITE_SUPABASE_BASE_ENDPOINT: URL_BASE,
  VITE_SUPABASE_ANON_PUBLIC: ANON_KEY
} = import.meta.env

const supabase = createClient<Database>(URL_BASE, ANON_KEY)

export {
  supabase
}
