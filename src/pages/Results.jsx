import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import CollapsibleTable from '../components/table/CollapsibleTable'
import { fullFilters as filters } from '../data/filters'
import './Result.css'
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import PaginationBar from '../components/PaginationBar'

const Results = () => {
  const initialOptions = {
    limit: 10,
    page: 1,
    sortBy: 'num',
    order: 1
  }

  const [checked, setChecked] = useState(true)
  const { state } = useLocation()
  const [options, setOptions] = useState(initialOptions)

  // [options] is useFetch's dependency array
  const { data, isLoading, error } = useFetch({ ...state, ...options }, [options])

  if (error) {
    console.log(error)
  }

  function handleSelectChange (e) {
    const selectedValue = e.target.value
    setOptions({
      ...options,
      sortBy: selectedValue
    })
  }

  function handleSwitch () {
    setChecked(!checked)
    setOptions({
      ...options,
      order: checked ? -1 : 1
    })
  }

  return (
    <>
      {isLoading && <CircularProgress />}
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
                defaultValue={initialOptions.sortBy}
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
          <div className="wrapper w-full bg-main-color p-6 flex justify-center items-center flex-col">
            <CollapsibleTable data={data.docs} />
            <PaginationBar options={options} setOptions={setOptions} currentPage={data.page} totalPages={data.totalPages} />
          </div>
        </div>}
    </>
  )
}

export default Results
