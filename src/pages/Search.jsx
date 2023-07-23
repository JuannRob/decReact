import React, { useState } from 'react'
import SearchBar from '../components/search-bar/SearchBar'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      <div className="w-full p-2">
        <h1 className="text-center text-2xl">
          Buscador de Decretos de la Función Ejecutiva de La Rioja
        </h1>
        <p className="text-md text-center">
          publicados en el Boletín Oficial (Período 2011-2015)
        </p>
      </div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </>
  )
}

export default Search
