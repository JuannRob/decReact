import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  let { state } = useLocation();
  const { data, isLoading, error } = useFetch(state);

  if (error) {
    console.log(error);
  }

  return (
    <div className="inline h-80 w-1/2 bg-main-color text-white">
      {isLoading && <div>Cargando...</div>}
      <ul>
        {data && data.docs.map((dec) => <li key={dec._id}>{dec.num}</li>)}
      </ul>
    </div>
  );
};

export default Search;
