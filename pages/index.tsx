import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { BASE_URL } from '@/constants'
import { Pokemon } from '@/types/pokemon'
import CardPokemonData from '@/components/Card/CardPokemonData'
import SearchInput from '@/components/Input/SearchInput'
import { fetcher } from '@/utils/fetcher'
import useDebounce from '@/utils/useDebounce'
import { getTypeColors } from '@/utils/bgType'
import LoaderPokeball from '@/components/Loader/LoaderPokeball'

const Home: NextPage = function () {
  const [search, setSearch] = useState('pikachu')

  const debouncedSearch = useDebounce(search, 1000)
  const { data, error } = useSWR<Pokemon>(debouncedSearch ? `${BASE_URL}/pokemon/${debouncedSearch}` : null, fetcher)

  const renderResult = (): JSX.Element => {
    if (error) {
      return <div className="search-message">No pokemon found!</div>
    }
    if (!data) {
      return <LoaderPokeball />
    }
    return <CardPokemonData pokemon={data as Pokemon} />
  }

  return (
    <div className={`font-sans text-slate-800 min-h-screen w-screen ${data ? `bg-gradient-to-t ${getTypeColors[data.types[0].type.name].from}` : ''} ${!error && !data ? 'loading' : ''} overflow-hidden`}>
      {/* <div className="absolute -rotate-45 -right-24 -top-24">
        <Image src="/pokeball.svg" alt="Vercel Logo" width={256} height={256} />
      </div> */}
      <Head>
        <title>
          Pokedex
          {data ? ` - ${data.name}` : null}
        </title>
        <meta name="description" content="Pokedex POC" />
        <link rel="icon" href="/pokeball.svg" />
      </Head>
      <main>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold italic">
            Pokedex
          </h1>
          <p className="text-slate-500">Search for a pokémon by name</p>
          <SearchInput handleSearch={(name: string) => setSearch(name)} />
          {renderResult()}
        </div>
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
