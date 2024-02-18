import React from 'react'
import './AdvSearchBar.css'
import filters from '../../data/filters'

function AdvSearchBar ({ index, currentInput, advInputs, setAdvInputs }) {
  const handleParamChange = (i, e) => {
    const newInputs = [...advInputs]
    newInputs[i].fieldName = e.target.value
    newInputs[i].isDisabled = false
    setAdvInputs(newInputs)
  }

  const handleValueChange = (i, e) => {
    const newInputs = [...advInputs]
    newInputs[i].inputValue = e.target.value
    setAdvInputs(newInputs)
  }

  return (
    <div className="inputBox">
      <input
        type="text"
        form="searchForm"
        name={currentInput.fieldName}
        value={currentInput.inputValue}
        onChange={(e) => handleValueChange(index, e)}
        disabled={currentInput.isDisabled}
      />
      <select value={currentInput.fieldName} onChange={(e) => handleParamChange(index, e)}>
        <option value="" disabled hidden>Otros filtros</option>
        {filters.map((filter, i) => {
          return (
            <option key={i} value={filter.slug}>
              {filter.title}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default AdvSearchBar
