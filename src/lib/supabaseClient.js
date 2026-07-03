import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function submitRsvp(payload) {
  const { data, error } = await supabase.from('rsvps').insert([payload]);
  return { data, error };
}

export async function fetchRsvpStats() {
  const { data, error } = await supabase
    .from('rsvps')
    .select('will_attend', { count: 'exact', head: false });

  if (error) {
    return { yes: 0, no: 0 };
  }

  const yes = data.filter((item) => item.will_attend).length;
  const no = data.filter((item) => !item.will_attend).length;
  return { yes, no };
}
