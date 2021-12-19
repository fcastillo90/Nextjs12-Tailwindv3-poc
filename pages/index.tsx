import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useMemo, useState } from 'react'
import { Typography } from '@mui/material'
import CardPokemonData from '@/components/Card/CardPokemonData'
import SearchInput from '@/components/Input/SearchInput'
import { getTypeColors } from '@/utils/bgType'
import getPokemon from '@/hooks/getPokemon'
import { PokemonContext } from '@/hooks/appContext'
import Footer from '@/components/Footer'

const Home: NextPage = function () {
  const [search, setSearch] = useState<string>('pikachu')
  const { pokemon, isLoading } = getPokemon(search)

  const contextInitValue = useMemo(() => ({
    searchValue: search,
    handleSearch: (name: string) => { setSearch(name) },
    pokemonData: pokemon,
  }), [pokemon])

  return (
    <div className="font-sans min-h-screen text-slate-800 w-screen">
      <PokemonContext.Provider value={contextInitValue}>
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
          <CardPokemonData />
        </main>
      </PokemonContext.Provider>

      <Footer />
    </div>
  )
}

export default Home
