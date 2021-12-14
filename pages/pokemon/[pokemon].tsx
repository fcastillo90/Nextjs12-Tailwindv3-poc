import { useRouter } from 'next/router'
import React from 'react'

const Pokemon = function () {
  const router = useRouter()
  const { pokemon } = router.query
  console.log(pokemon)

  return <div>este</div>
}

export default Pokemon
