import React from 'react'
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

function PaginationBar ({ options, setOptions, currentPage, totalPages }) {
  function handleChange (e, currentPage) {
    setOptions({
      ...options,
      page: currentPage
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        className="pt-5"
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </ThemeProvider>
  )
}

export default PaginationBar
