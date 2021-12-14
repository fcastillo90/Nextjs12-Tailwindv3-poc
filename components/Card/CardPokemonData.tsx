import React from 'react'
import Image from 'next/image'
import { Pokemon } from '@/types/pokemon'

const CardPokemonData = function ({ pokemon }: {pokemon: Pokemon}) {
  return (
    <>
      <h1 className="text-3xl text-center capitalize font-semibold">{pokemon.name}</h1>
      <h3 className="text-center">{pokemon.id}</h3>
      <div className="w-80 relative h-80 mx-auto -m-8">
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} className="" layout="fill" />
      </div>
    </>
  )
}

export default CardPokemonData
