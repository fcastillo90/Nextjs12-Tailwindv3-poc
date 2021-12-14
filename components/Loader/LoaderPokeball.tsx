import React from 'react'
import Image from 'next/image'
import SkeletonPokemonData from '@/components/Skeleton/SkeletonPokemonData'

const LoaderPokeball = function () {
  return (
    <>
      <div className="h-2 bg-gray-100 rounded col-span-2" />
      <div className="animate-bounce w-32 relative h-32 mx-auto">
        <Image src="/pokeball.svg" alt="Vercel Logo" layout="fill" />
      </div>
      <SkeletonPokemonData />
    </>
  )
}

export default LoaderPokeball
