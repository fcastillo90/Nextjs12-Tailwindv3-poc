/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Image from 'next/image'
import LoaderPokeball from '../Loader/LoaderPokeball'
import NFSearchPokemon from '../NotFound/NFSearchPokemon'
import PokemonCharateristics from '../Tab/PokemonCharateristics'
import { PokemonContext } from '@/hooks/appContext'

const CardPokemonData = function () {
  const { pokemonData } = useContext(PokemonContext)
  // if (error) {
  //   return <NFSearchPokemon />
  // }
  if (!pokemonData) return <LoaderPokeball />

  return (
    <>
      <h1 className="text-3xl text-center capitalize font-semibold">{pokemonData.name}</h1>
      <h3 className="text-center">{pokemonData.id}</h3>
      <div className="w-80 relative h-80 mx-auto -m-8">
        <Image src={pokemonData.sprites.front_default} alt={pokemonData.name} className="" layout="fill" />
      </div>
      <PokemonCharateristics />
    </>
  )
}

export default CardPokemonData
