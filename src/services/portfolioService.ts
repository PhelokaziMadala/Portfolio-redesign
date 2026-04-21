import { supabase } from '../lib/supabaseClient'

export async function fetchPortfolioProjects() {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) throw error
  return data
}
