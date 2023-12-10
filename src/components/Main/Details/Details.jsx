import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Obtener los valores de los parámetros que hay en la query 
  const id = location.pathname.split("/").pop();
  const name = searchParams.get("name");
  const peso = searchParams.get("peso");
  const altura = searchParams.get("altura");
  const foto = searchParams.get("foto");
  const color = searchParams.get("color")
  const type1 = searchParams.get("type1");
  const type2 = searchParams.get("type2");
  const descripcion = searchParams.get("descripcion");

  return (
    <>
      <section>
        <h2>Detalles de {name.toUpperCase()} </h2>
      </section>
      <section style={{backgroundColor:`${color}`}}>
        <article>
          <p>#{id}</p>
          <img src={foto} alt="" />
        </article>
        <p>Nombre: {name}</p>
        <p>Peso: {peso} kg.</p>
        <p>Altura: {altura} cm.</p>
        <p>Tipo 1: {type1}</p>
        <p>Tipo 2: {type2}</p>
        <p>Descripcion: {descripcion}</p>
        {/* Agrega más detalles según tus necesidades */}
      </section>
    </>
  );
};

export default Details;
