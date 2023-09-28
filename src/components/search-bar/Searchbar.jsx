import React, { useState } from 'react'
import {
  Select,
  InputLabel,
  TextField,
  MenuItem,
  FormControl
} from '@mui/material'

const filters = {
  fecha_pub: 'Fecha de publicación',
  firma: 'Gobernador',
  otros_firman: 'Otros firmantes',
  num_ed_pub: 'N° Ed. Pub.',
  pag_pub: 'Pág. Pub.',
  anho_tomo: 'Año del Tomo',
  nro_tomo: 'N° del Tomo',
  anexo: 'Anexo',
  ley_promul: 'Ley promulgada',
  ley_vetada: 'Ley vetada',
  parte_vetada: 'Parte Vetada',
  ratif_x_ley: 'Ratif. por ley',
  dnu: 'DNU',
  reglamenta_ley: 'Reglamenta ley',
  tema: 'Tema',
  titulo: 'Título',
  estado: 'Estado',
  modif_por: 'Modificada por',
  modif_a: 'Modifica a',
  ref_norm: 'Ref. normativas',
  fecha_carga: 'Fecha Carga',
  deroga_dec: 'Deroga decreto',
  derogado_por: 'Derogada por',
  pendiente: 'Pendiente'
}

function CustomSearchBar ({ formName, inputColor }) {
  const [isDisable, setIsDisable] = useState(true)
  

  const handleChange = e => {
    setIsDisable(false)
    setSearchItem(e.target.value)
  }

  return (
        <FormControl fullWidth className="flex flex-col">
            <div>
                <InputLabel id="">{filters[searchItem]}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={filters[searchItem]}
                    onChange={handleChange}
                >
                    {Object.keys(filters).map((item, i) => {
                      return (
                            <MenuItem key={i} value={item}>
                                {filters[item]}
                            </MenuItem>
                      )
                    })}
                </Select>
            </div>
            <TextField
                id="search-bar"
                form="searchForm"
                className="text"
                variant="outlined"
                size="small"
                value={}
                disabled={isDisable}
            />
        </FormControl>
  )
}
export default CustomSearchBar
