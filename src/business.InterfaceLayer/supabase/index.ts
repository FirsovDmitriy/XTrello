import { createClient } from '@supabase/supabase-js'
import { ISupabase } from './supabase.types'

var url = import.meta.env.VITE_SUPABASE_URL
var key = import.meta.env.VITE_SUPABASE_KEY
export var supabase = createClient<ISupabase>(url, key)
