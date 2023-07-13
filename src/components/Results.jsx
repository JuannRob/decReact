import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Tab from "./Tab";

const Search = () => {
  let { state } = useLocation();
  const { data, isLoading, error } = useFetch(state);

  if (error) {
    console.log(error);
  }

  return (
    <div className="inline h-80 w-1/2 bg-main-color text-white">
      {isLoading && <div>Cargando...</div>}
      {data && <Tab data={data.docs} />}
    </div>
  );
};

export default Search;
