import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import { BASE_URL } from '@/constants'
import { PokemonList, PokemonOverviewData } from '@/types/pokemon'

const SearchInput = function ({ handleSearch }: {handleSearch: (name: string) => void}) {
  let list: PokemonOverviewData[] = []
  const { data } = useSWR<PokemonList>(`${BASE_URL}/pokemon?limit=1200`, fetcher)
  if (data) list = data.results

  return (
    <div className="relative my-2">
      <Autocomplete
        disablePortal
        id="search-pokemon"
        options={list}
        getOptionLabel={(option: PokemonOverviewData) => option?.name}
        sx={{ width: 300 }}
        onChange={(_event, option) => option?.name && handleSearch(option?.name ?? '')}
        renderInput={(params) => <TextField {...params} label="Search" color="secondary" />}
      />
    </div>
  )
}

export default SearchInput
