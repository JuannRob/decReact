import React from 'react'
import './AdvSearchBar.css'
import filters from '../../data/filters'

function AdvSearchBar ({ index, input, handleValueChange, handleParamChange }) {
  return (
    <div className="inputBox">
      <input
        type="text"
        form="searchForm"
        name={input.paramName}
        value={input.paramValue}
        onChange={(e) => handleValueChange(index, e)}
        disabled={input.isDisable}
      />
      <select value={input.paramName} onChange={(e) => handleParamChange(index, e)}>
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
