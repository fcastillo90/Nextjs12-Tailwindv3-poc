/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import useSWR from 'swr'
import { Typography } from '@mui/material'
import { Evolution } from '@/types/pokemon'
import { fetcher } from '@/utils/fetcher'
import { BASE_URL } from '@/constants'
import { PokemonContext } from '@/hooks/appContext'

const EvolutionTab = function () {
  const { pokemonData, handleSearch } = useContext(PokemonContext)

  const { data } = useSWR<Evolution>(`${BASE_URL}/evolution-chain/${pokemonData.id}`, fetcher)

  return (
    <>
      <Typography onClick={() => handleSearch(data?.chain.evolves_to[0].species.name as string)}>
        {data?.chain.evolves_to[0].species.name}
      </Typography>
    </>
  )
}

export default React.memo(EvolutionTab)
