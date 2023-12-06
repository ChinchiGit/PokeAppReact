import React from "react";

const Card = ({key,name,id,peso,altura,foto,color,quitarPokemon}) => {

  return(
    <>
      <article style={{backgroundColor:{color}}}>
        <div>
          <p>#{id}</p>
          <img src={foto} alt={name} />
        </div>
        <div>
          <p>{name}</p>
          <div>
            <p>Peso: {peso}</p>
            <p>Altura: {altura}</p>
          </div>
        </div>
        <button onClick={quitarPokemon}>Eliminar</button>
      </article>
    </>
  )

};

export default Card;
