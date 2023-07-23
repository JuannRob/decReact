import React from "react";
import { TextField, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/decretos", { state: searchString });
  };

  const handleInput = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={handleInput}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={searchQuery}
      />
      <IconButton type="submit" aria-label="search" onSubmit={handleSubmit}>
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
