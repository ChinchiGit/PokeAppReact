import React from "react";

const Card = ({name,id,peso,altura,foto,color, type1, type2, descripcion, quitarPokemon}) => {

  return(
    <>
      <article style={{backgroundColor:`${color}`}}>
        <div>
          <p>#{id}</p>
          <img src={foto} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{descripcion}</p>
          <div>
            <p>Peso: {peso} kg.</p>
            <p>Altura: {altura} cm.</p>
            <p>Tipo 1: {type1}</p>
            <p>Tipo 2: {type2}</p>
          </div>
        </div>
        <button onClick={quitarPokemon}>Eliminar</button>
      </article>
    </>
  )

};

export default Card;
