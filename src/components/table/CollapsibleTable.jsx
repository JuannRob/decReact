import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import Row from './Row'

const CollapsibleTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '10%' }}/>
            <TableCell align="center" sx={{ width: '10%' }}>Decreto</TableCell>
            <TableCell align="center" sx={{ width: '15%' }}>Firma</TableCell>
            <TableCell align="center" sx={{ width: '65%' }}>Tema</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dec) => (
            <Row key={dec._id} dec={dec} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default CollapsibleTable
