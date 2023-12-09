import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Obtén los valores de los parámetros de consulta
  const id = location.pathname.split("/").pop();
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const typeOne = searchParams.get("typeOne");

  return (
    <div>
      <h2>Detalles del Pokémon</h2>
      <p>ID: {id}</p>
      <p>Nombre: {name}</p>
      <p>Imagen: {image}</p>
      <p>Tipo: {typeOne}</p>
      {/* Agrega más detalles según tus necesidades */}
    </div>
  );
};

export default Details;
