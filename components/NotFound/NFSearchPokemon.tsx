import React from 'react'
import Image from 'next/image'

const NFSearchPokemon = function () {
  return (
    <>
      <div className="w-32 relative h-32 mx-auto">
        <Image src="/giphy.webp" alt="Vercel Logo" layout="fill" />
      </div>
      <h2 className="text-center mt-20 ">No Pokemon found!</h2>
    </>
  )
}

export default NFSearchPokemon
