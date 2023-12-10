import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, id, peso, altura, foto, color, type1, type2, descripcion, quitarPokemon }) => {

  return (
    <>
      <article key={id} style={{ backgroundColor: `${color}` }}>
        <div>
          <p>#{id}</p>
          <img src={foto} alt={name} />
        </div>
        <div>
        {/* Enlace a vista detalle y construccion de la query */}
          <Link
            key={id}
            to={{
              pathname: `/pokemon/${id}`,
              search: `name=${name}&id=${id}}&peso=${peso}&altura=${altura}&foto=${foto}&color=${color}&type1=${type1}&type2=${type2}&descripcion=${descripcion}`
            }}
          >
            <h3>{name}</h3>
          </Link>
        </div>
        <button onClick={quitarPokemon}>Eliminar</button>
      </article>
    </>
  )

};

export default Card;
