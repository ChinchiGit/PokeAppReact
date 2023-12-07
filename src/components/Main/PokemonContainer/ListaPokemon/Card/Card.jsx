import React from "react";

const Card = ({name,id,peso,altura,foto,color,descripcion, quitarPokemon}) => {

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
          </div>
        </div>
        <button onClick={quitarPokemon}>Eliminar</button>
      </article>
    </>
  )

};

export default Card;
