import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import CollapsibleTable from '../components/table/CollapsibleTable'
import Pagination from '@mui/material/Pagination'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          button: {
            color: '#fff',
            border: '1px solid #fff'
          }
        }
      }
    }
  }
})

const Results = () => {
  const { state } = useLocation()

  const { data, isLoading, error } = useFetch(state)
  const { options, setOptions } = useState({
    limit: 10,
    page: 1,
    sortBy: 'num',
    order: 1
  })

  if (error) {
    console.log(error)
  }

  return (
    <div className="wrapper w-full bg-main-color p-5 my-11 xl:my-15">
        {isLoading && <div>Cargando...</div>}
        {data && <CollapsibleTable data={data.docs} />}
        <ThemeProvider theme={theme}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </ThemeProvider>
    </div>
  )
}

export default Results
