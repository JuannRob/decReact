import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { num, anho, fecha, tema, link_pub, firma } = useLocation().state;
  const fechaFormat = new Date(fecha);

  return (
    <div className="inline h-80 w-1/2 bg-main-color text-white">
      <ul>
        <li>
          {num}/{anho}
        </li>
        <li>
          Fecha: {fechaFormat.getDay()}/{fechaFormat.getMonth()}/{anho}
        </li>
        <li>Firma: {firma}</li>
        {tema && (
          <li className="w-3/4">
            Tema: <span className="w-full border-2">{tema}</span>
          </li>
        )}
        <li>
          <a href={link_pub}>Ver Decreto</a>
        </li>
      </ul>
    </div>
  );
};

export default Details;
