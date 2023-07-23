import * as React from "react";
import { Link } from "react-router-dom";
import { TableCell, TableRow, Collapse, Box, IconButton } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const Row = (props) => {
  const { dec } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Link to="details" state={dec}>
            {dec.num}/{dec.anho}
          </Link>
        </TableCell>
        <TableCell align="right">{dec.firma}</TableCell>
        <TableCell align="left">{dec.tema}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <ul>
                <li>Otras firmas: {dec.otros_firman}</li>
                <li>Num. Ed. Pub.:{dec.num_ed_pub}</li>
                {dec.art_126_12 && <li>DNU</li>}
                <li>
                  <a href={dec.link_pub}>Ver Decreto</a>
                </li>
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
