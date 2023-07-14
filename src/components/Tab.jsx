import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tab = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Decreto</TableCell>
            <TableCell align="left">Firma</TableCell>
            <TableCell align="left">Tema</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dec) => (
            <TableRow
              key={dec._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ width: "20%" }}>
                {dec.num}/{dec.anho}
              </TableCell>
              <TableCell align="left" sx={{ width: "20%" }}>
                {dec.firma}
              </TableCell>
              <TableCell sx={{ width: "40%", textAlign: "start" }} align="left">
                {dec.tema}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Tab;
