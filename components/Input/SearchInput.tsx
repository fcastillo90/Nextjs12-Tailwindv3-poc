import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import getList from '@/hooks/getList'
import { PokemonOverviewData } from '@/types/pokemon'

const SearchInput = function ({ handleSearch }: {handleSearch: (name: string) => void}) {
  const { list } = getList()

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
