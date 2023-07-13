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
    <>
      <TextField
        id="outlined-basic"
        name="num"
        label="Outlined"
        variant="outlined"
        value={searchString}
        onChange={handleChange}
      />
      <Button variant="text" color="primary" onClick={handleClick}>
        Buscar!
      </Button>
    </>
  );
};

export default Search;
