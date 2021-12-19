import useSWR from 'swr'
import { BASE_URL } from '@/constants'
import { Pokemon } from '@/types/pokemon'
import { fetcher } from '@/utils/fetcher'

const getPokemon = (search: string): {
  pokemon: Pokemon;
  isLoading: boolean;
  isError: any;
} => {
  const { data, error } = useSWR<Pokemon>(search ? `${BASE_URL}/pokemon/${decodeURIComponent(search)}` : null, fetcher)

  return {
    pokemon: data as Pokemon,
    isLoading: !error && !data,
    isError: error,
  }
}

export default getPokemon
