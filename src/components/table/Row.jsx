import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  TableCell,
  TableRow,
  Collapse,
  Box,
  IconButton,
  Stack,
  Chip
} from '@mui/material'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

const Row = props => {
  const { dec } = props
  const [open, setOpen] = React.useState(false)

  const fecha = new Date(dec.fecha)
  const fechaPub = new Date(dec.fecha_pub)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, height: 120 }}>
        <TableCell sx={{ width: '10%' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="center"
          sx={{ verticalAlign: 'top', width: '10%' }}
        >
          <Link to="details" state={dec}>
            {dec.num}/{dec.anho}
          </Link>
        </TableCell>
        <TableCell align="center" sx={{ verticalAlign: 'top', width: '15%' }}>
          {dec.firma}
        </TableCell>
        <TableCell align="left" sx={{ width: '65%', verticalAlign: 'top' }}>
          {dec.tema}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, padding: 1 }}>
              <ul>
                <li>
                  <b>Otras firmas:</b> {dec.otros_firman}
                </li>
                <li>
                  <b>Del</b> {fecha.toLocaleDateString()} - <b>Pub.</b>{' '}
                  {fechaPub.toLocaleDateString()}
                </li>
                <li>
                  <b>Num. Ed. Pub.:</b>
                  {dec.num_ed_pub}
                </li>
              </ul>

              <div className='my-3'>
                {dec.modif_a && <p> Modificado a {dec.modif_a}. <br /> </p>}
                {dec.modif_por && <p> Modificado por Dec. {dec.modif_por}. <br /> </p>}
                {dec.ratif_x_ley && <p> Ratificado por Ley {dec.ratif_x_ley}. <br /> </p>}
                {dec.anexo && <p> Anexo: {dec.anexo}. <br /> </p>}
                {dec.ref_norm && <p> Referencias normativas: {dec.ref_norm}. <br /> </p>}
              </div>

              <p>
                Nota de la SIT: <br />
              </p>
              <p className="ps-3">
                Boletin Oficial disponible en: <br />
                Biblioteca de la S.I.T.: Volumen {dec.anho_tomo}, tomo{' '}
                {dec.nro_tomo}, pág. {dec.pag_pub}
                <br />
                Versión digital en{' '}
                <a href={dec.link_pub} target="_blank" rel="noreferrer" className='underline py-1'>
                  Boletín Oficial de La Rioja
                </a>
              </p>

              <Stack direction="row" spacing={1} className="py-2">
                {dec.art_126_12 && (
                  <Chip label="Decreto de Necesidad y Urgencia" />
                )}
                {dec.ley_promul && dec.ley_vetada && (
                  <Chip label="De promulgación y veto parcial" />
                )}
                {dec.ley_promul && !dec.ley_vetada && (
                  <Chip label="De promulgación" />
                )}
                {!dec.parte_vetada && dec.ley_vetada && (
                  <Chip label="De veto" />
                )}
                {dec.reglamenta_ley && <Chip label="Decreto reglamentario" />}
                {dec.derogado_por && <Chip label="DEROGADO" />}
                {dec.deroga_dec && <Chip label="De derogación" />}
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default Row
