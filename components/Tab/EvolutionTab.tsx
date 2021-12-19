/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import useSWR from 'swr'
import { Grid, Typography } from '@mui/material'
import { Evolution } from '@/types/pokemon'
import { fetcher } from '@/utils/fetcher'
import { BASE_URL } from '@/constants'

const EvolutionTab = function ({ id }: {id: number}) {
  const pokemonEvolution: Evolution = {
    baby_trigger_item: null,
    chain: {
      evolution_details: [],
      evolves_to: [],
      is_baby: false,
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
    },
    id: 1,
  }
  const { data } = useSWR<Evolution>(`${BASE_URL}/evolution-chain/${id}`, fetcher)
  console.log(data)

  return (
    <>
    </>
  )
}

export default EvolutionTab
