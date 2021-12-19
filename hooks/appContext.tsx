/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'
import { Pokemon } from '@/types/pokemon'

export const contextInitValue = {
  searchValue: '',
  handleSearch: (name: string): void => {},
  pokemonData: {} as Pokemon,
}

export const PokemonContext = createContext(contextInitValue)
