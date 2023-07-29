import React from 'react'
// import SearchBar from '../components/search-bar/SearchBar'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new window.FormData(e.target)
    for (const pair of formData) {
      if (pair[1] === '') {
        formData.delete(pair[0])
      }
    }
    const fields = Object.fromEntries(formData)
    console.log(fields)
    navigate('/decretos', { state: fields })
  }

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
      <form className='form' onSubmit={handleSubmit}>
      <TextField
        id="search-bar"
        name="num"
        className="text"
        label="Ingrese el número"
        variant="outlined"
        placeholder="341 o :23"
        size="small"
      />
      <TextField
        id="search-bar"
        name="anho"
        className="text"
        label="Ingrese el año"
        variant="outlined"
        placeholder="2011"
        size="small"
      />
      <TextField
        id="search-bar"
        name="firma"
        className="text"
        label="Ingrese firmante"
        variant="outlined"
        placeholder="Herrera"
        size="small"
      />
      <button type='submit'>Buscar!</button>
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      </form>
    </>
  )
}

export default Search
