import useSWR from 'swr'
import { BASE_URL } from '@/constants'
import { fetcher } from '@/utils/fetcher'
import { PokemonList, PokemonOverviewData } from '@/types/pokemon'

const getList = (): {
  list: PokemonOverviewData[];
  isLoading: boolean;
  isError: any;
} => {
  const { data, error } = useSWR<PokemonList>(`${BASE_URL}/pokemon?limit=1200`, fetcher)

  return {
    list: data?.results as PokemonOverviewData[],
    isLoading: !error && !data,
    isError: error,
  }
}

export default getList
