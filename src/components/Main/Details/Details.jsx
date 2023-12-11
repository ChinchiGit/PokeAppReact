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
      <section className="details" style={{backgroundColor:`${color}`}}>
        <article id="fotoDetails">
          <img src={foto} alt="" />
        </article>
        <article id="datosDetails">
          <p><b>Nombre:</b> {name} (id: #{id})</p>
          <p><b>Peso: </b> {peso} kg.</p>
          <p><b>Altura:</b> {altura} cm.</p>
          <p><b>Tipo 1:</b> {type1}</p>
          <p><b>Tipo 2:</b> {type2}</p>
          <p><b>Descripcion:</b> {descripcion}</p>
        </article>
      </section>
    </>
  );
};

export default Details;
