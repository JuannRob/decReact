import React, { useState } from 'react'
import { Button, IconButton, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useNavigate } from 'react-router-dom'
import filters from '../data/filters'
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
      <form id="searchForm" className="form flex items-center [&>.text]:w-1/2 gap-3 py-5 text-black" onSubmit={handleSubmit}>
        <input
          id="search-bar"
          name="num"
          className="text"
          label="Ingrese el número"
          placeholder="341 o :23"
        />
        <input
          id="search-bar"
          name="anho"
          className="text"
          label="Ingrese el año"
          placeholder="2011"
        />
      </form>
      <Button form="searchForm" variant="contained" type="submit"> Buscar </Button>
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
        <div className="p-4 w-full text-black">
          {inputs.map((input, i) => (
            <div key={i}>
              <select value={input.paramName} onChange={(e) => handleParamChange(i, e)}>
                <option value="" disabled selected hidden>Otros filtros</option>
                {Object.keys(filters).map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {filters[item]}
                    </option>
                  )
                })}
              </select>
              <input
                type="text"
                form="searchForm"
                name={input.paramName}
                value={input.paramValue}
                onChange={(e) => handleValueChange(i, e)}
                disabled={input.isDisable}
              />
            </div>
          ))}

        </div>
      </Collapse>
    </>
  )
}

export default Search
