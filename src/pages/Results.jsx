import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import CollapsibleTable from '../components/table/CollapsibleTable'

const Results = () => {
  const { state } = useLocation()

  const { data, isLoading, error } = useFetch(state)

  if (error) {
    console.log(error)
  }

  return (
    <div className="inline h-80 w-1/2 bg-main-color text-white">
      {isLoading && <div>Cargando...</div>}
      {data && <CollapsibleTable data={data.docs} />}
    </div>
  )
}

export default Results
