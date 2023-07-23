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
            <TableCell />
            <TableCell align="center">Decreto</TableCell>
            <TableCell align="center">Firma</TableCell>
            <TableCell align="center">Tema</TableCell>
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
