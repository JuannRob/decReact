import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  let { decreto } = useParams();
  return (
    <div className="inline h-80 w-1/2 bg-main-color text-white">
      Decreto Número: {decreto}
    </div>
  );
};

export default Search;
