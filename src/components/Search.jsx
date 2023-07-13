import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/decretos", { state: searchString });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };

  return (
    <Box sx={{ border: 1 }}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={searchString}
        onChange={handleChange}
      />
      <Button variant="text" color="primary">
        Buscar!
      </Button>
    </Box>
  );
};

export default Search;
