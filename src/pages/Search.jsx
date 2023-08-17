import React, { useState } from 'react'
import { IconButton, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useNavigate } from 'react-router-dom'
import filters from '../data/filters'
import '../components/search-bar/SearchBar.css'
// import CustomSearchBar from '../components/search-bar/CustomSearchBar'

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
      console.log(pair)
      if (pair[1] === '') {
        formData.delete(pair[0])
      }
    }
    const fields = Object.fromEntries(formData)
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
      <form id="searchForm" className="form p-3 flex items-center [&>.text]:w-1/2 gap-3 py-5 text-black" onSubmit={handleSubmit}>
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
        <button form="searchForm" type="submit" className='border p-2 rounded text-white'> Buscar </button>
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
            <div key={i} className="inputBox">
              <input
                type="text"
                form="searchForm"
                name={input.paramName}
                value={input.paramValue}
                onChange={(e) => handleValueChange(i, e)}
                disabled={input.isDisable}
              />
              <select value={input.paramName} onChange={(e) => handleParamChange(i, e)}>
                <option value="" disabled selected hidden>Otros filtros</option>
                {filters.map((filter, i) => {
                  return (
                    <option key={i} value={filter.id}>
                      {filter.title}
                    </option>
                  )
                })}
              </select>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  )
}

export default Search
