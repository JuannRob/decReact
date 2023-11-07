import React, { useState } from 'react'
import { IconButton, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
import AdvSearchBar from '../components/search-bar/AdvSearchBar'

const Search = () => {
  const initialInputs = [
    { paramName: '', paramValue: '', isDisable: true },
    { paramName: '', paramValue: '', isDisable: true },
    { paramName: '', paramValue: '', isDisable: true },
    { paramName: '', paramValue: '', isDisable: true }
  ]

  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)
  const [inputs, setInputs] = useState(initialInputs)

  const handleParamChange = (i, e) => {
    const newInputs = [...inputs]
    newInputs[i].paramName = e.target.value
    newInputs[i].isDisable = false
    setInputs(newInputs)
  }

  const handleValueChange = (i, e) => {
    const newInputs = [...inputs]
    newInputs[i].paramValue = e.target.value
    setInputs(newInputs)
  }

  const handleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new window.FormData(e.target)
    for (const pair of formData) {
      if (pair[1] === '') {
        formData.delete(pair[0])
      }
    }
    const fields = Object.fromEntries(formData)
    navigate('/decretos', { state: fields })
  }

  return (
    <div className="wrapper w-full bg-main-color p-5 my-11 xl:my-0">
      <div className="w-full p-2">
        <h1 className="text-center text-2xl">
          Buscador de Decretos de la Función Ejecutiva de La Rioja
        </h1>
        <p className="text-md text-center">
          publicados en el Boletín Oficial (Período 2011-2015)
        </p>
      </div>
      <form id="searchForm" className="form p-3 flex items-center [&>.text]:w-1/2 gap-3 py-5" onSubmit={handleSubmit}>
        <input
          id="search-bar"
          name="num"
          className="styledInput"
          label="Ingrese el número"
          placeholder="341 o :23"
        />
        <input
          id="search-bar"
          name="anho"
          className="styledInput"
          label="Ingrese el año"
          placeholder="2011"
        />
        <IconButton type="submit" aria-label="search" sx={{ border: '1px solid white', borderRadius: 2, padding: 0.5 }}>
          <SearchIcon sx={{ color: 'white', fontSize: 35, margin: 0 }} />
        </IconButton>
      </form>
      <div className="flex justify-end items-center">
        <span>Búsqueda avanzada</span>
        <IconButton
          size="large"
          edge="end"
          aria-label="expand"
          onClick={handleExpand}
          sx={{ color: 'white' }}
        >
          {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="p-3 w-full m-auto text-white gap-4 grid grid-cols-2">
          {inputs.map((input, i) => (
            <AdvSearchBar key={i} index={i} input={input} handleParamChange={handleParamChange} handleValueChange={handleValueChange}/>
          ))}
        </div>
      </Collapse>
    </div>
  )
}

export default Search
