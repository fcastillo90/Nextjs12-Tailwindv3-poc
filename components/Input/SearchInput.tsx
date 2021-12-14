import React from 'react'

const SearchInput = function ({ handleSearch }: {handleSearch: (name: string) => void}) {
  return (
    <div className="relative my-2">
      <div className="absolute pointer-events-auto">
        <svg className="absolute text-gray-400 h-5 w-5 m-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="h-7 rounded w-50 bg-slate-100 border-1 border-slate-400 pl-7 focus:outline-none focus:ring focus:ring-slate-300"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
