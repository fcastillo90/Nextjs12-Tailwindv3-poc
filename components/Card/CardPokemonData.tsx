/* eslint-disable react/prop-types */
import React from 'react'
import Image from 'next/image'
import { Pokemon } from '@/types/pokemon'
import LoaderPokeball from '../Loader/LoaderPokeball'
import NFSearchPokemon from '../NotFound/NFSearchPokemon'
import PokemonCharateristics from '../Tab/PokemonCharateristics'

const CardPokemonData = function ({ data }: {data: Pokemon}) {
  // if (error) {
  //   return <NFSearchPokemon />
  // }
  if (!data) return <LoaderPokeball />

  return (
    <>
      <h1 className="text-3xl text-center capitalize font-semibold">{data.name}</h1>
      <h3 className="text-center">{data.id}</h3>
      <div className="w-80 relative h-80 mx-auto -m-8">
        <Image src={data.sprites.front_default} alt={data.name} className="" layout="fill" />
      </div>
      <PokemonCharateristics data={data} />
    </>
  )
}

export default CardPokemonData
