import { createClient } from "@supabase/supabase-js";

const {
  VITE_SUPABASE_BASE_ENDPOINT: URL_BASE,
  VITE_SUPABASE_ANON_PUBLIC: ANON_KEY,
} = import.meta.env;

const supabase = createClient(URL_BASE, ANON_KEY);

export { supabase };
