import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // En entorno de producción sin variables configuradas,
  // evitamos romper toda la app y solo mostramos un warning en consola.
  console.warn(
    'Missing Supabase environment variables. Work page will not load remote projects.'
  );
}

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
