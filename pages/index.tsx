import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import useSWR from 'swr'
import { Typography } from '@mui/material'
import CardPokemonData from '@/components/Card/CardPokemonData'
import SearchInput from '@/components/Input/SearchInput'
import { BASE_URL } from '@/constants'
import { getTypeColors } from '@/utils/bgType'
import { fetcher } from '@/utils/fetcher'
import { Pokemon } from '@/types/pokemon'

const getPokemon = (search: string) => {
  const { data, error } = useSWR<Pokemon>(search ? `${BASE_URL}/pokemon/${decodeURIComponent(search)}` : null, fetcher)
  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  }
}

const Home: NextPage = function () {
  const [search, setSearch] = useState('pikachu')
  const { pokemon, isLoading } = getPokemon(search)

  return (
    <div className="font-sans min-h-screen text-slate-800 w-screen">
      {/* <div className="absolute -rotate-45 -right-24 -top-24">
        <Image src="/pokeball.svg" alt="Vercel Logo" width={256} height={256} />
      </div> */}
      <main>
        <div className="absolute h-full w-full z-[-1]">
          <div className={`${pokemon && getTypeColors[pokemon?.types[0].type.name].bg} h-2/4 w-full`} />
          <div className={`test bg-white ${isLoading && 'loading'} h-2/4 w-full`} />
        </div>
        <div className="container mx-auto text-white">
          <Typography variant="h1">
            Pokedex
          </Typography>
          <Typography variant="subtitle1">Search for a pokémon by name</Typography>
          <SearchInput handleSearch={(name: string) => setSearch(name)} />
        </div>
        <CardPokemonData data={pokemon as Pokemon} />
      </main>

      <footer className="bottom-0 absolute w-full text-center">
        <a
          href="https://github.com/fcastillo90/poc-nextjs12-tailwind3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Francisco
          {/* <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}

export default Home
