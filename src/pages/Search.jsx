import React from 'react'
// import SearchBar from '../components/search-bar/SearchBar'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const inputColor = {
  input: { color: 'white' },
  color: 'white',
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  },
  '& .MuiInputLabel-root': {
    color: 'white'
  }
}

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
      <form className='form flex flex-col items-center [&>.text]:w-1/2 gap-3 py-5' onSubmit={handleSubmit}>
      <TextField
        id="search-bar"
        name="num"
        className="text"
        label="Ingrese el número"
        variant="outlined"
        placeholder="341 o :23"
        size="small"
        sx={ inputColor }
      />
      <TextField
        id="search-bar"
        name="anho"
        className="text"
        label="Ingrese el año"
        variant="outlined"
        placeholder="2011"
        size="small"
        sx={ inputColor }
      />
      <TextField
        id="search-bar"
        name="firma"
        className="text"
        label="Ingrese firmante"
        variant="outlined"
        placeholder="Herrera"
        size="small"
        sx={ inputColor }
      />
      <Button variant="contained" type="submit"> Buscar </Button>
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      </form>
    </>
  )
}

export default Search
