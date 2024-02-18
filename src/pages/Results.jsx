import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import CollapsibleTable from '../components/table/CollapsibleTable'
import filters from '../data/filters'
import './Result.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import PaginationBar from '../components/PaginationBar'


const Results = () => {
  const [checked, setChecked] = useState(true)
  const { state } = useLocation()
  const [options, setOptions] = useState({
    limit: 10,
    page: 1,
    sortBy: 'num',
    order: 1
  })

  // [options] is useFetch's dependency array
  const { data, isLoading, error } = useFetch({ ...state, ...options }, [options])

  function handleSelectChange(e) {
    const selectedValue = e.target.value
    setOptions({
      ...options,
      sortBy: selectedValue
    })
  }
  if (error) {
    console.log(error)
  }

  function handleSwitch() {
    if (checked) {
      setOptions({
        ...options,
        order: -1
      })
    } else {
      setOptions({
        ...options,
        order: 1
      })
    }
    setChecked(!checked)
  }

  return (
    <>
      {isLoading && <div>Cargando...</div>}
      {data &&
        <div className='w-full flex my-11 xl:my-15'>
          <div className='w-1/4 p-10 absolute -left-80'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Orderna Por"
                onChange={handleSelectChange}
                defaultValue=""
              >
                {filters.map((filter, i) => {
                  return (
                    <MenuItem key={i} value={filter.slug}>{filter.title}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <div className="checkbox-wrapper-35">
              <input value="private" name="switch" id="switch" type="checkbox" className="switch" defaultChecked={checked} onClick={handleSwitch} />
              <label htmlFor="switch">
                <span className="switch-x-toggletext">
                  <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel">Unchecked: </span>Descendente</span>
                  <span className="switch-x-checked"><span className="switch-x-hiddenlabel">Checked: </span>Ascendente</span>
                </span>
              </label>
            </div>
          </div>
          <div className="wrapper bg-main-color p-6 flex justify-center items-center flex-col">
            <CollapsibleTable data={data.docs} />
            <PaginationBar options={options} setOptions={setOptions} currentPage={data.page} totalPages={data.totalPages} />
          </div>
        </div>}
    </>
  )
}

export default Results
