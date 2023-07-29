import React from 'react'
import { TextField } from '@mui/material'

const SearchBar = () => {
  return (
      <TextField
        id="search-bar"
        name="num"
        className="text"
        label="Ingrese el número"
        variant="outlined"
        placeholder="341 o :23"
        size="small"
      />
  )
}

export default SearchBar
