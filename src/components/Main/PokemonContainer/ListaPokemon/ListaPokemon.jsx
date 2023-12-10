import React, {useState, useEffect, useContext} from "react";
import Card from "./Card";
import { PokemonListContext } from "../../../../context/PokemonListContext";

import { useQueryParams, StringParam } from "query-parameters";

const ListaPokemon = () => {
  //Cotexto
  const { allPokemon, updateAllPokemon} = useContext(PokemonListContext);

  //Eliminar un Pokemon de la lista quitandolo rel array contexto
  const quitarPokemon= (i) =>{
    const pokemonRestantes = allPokemon.filter((pokemon, j) => i!==j);
    updateAllPokemon(pokemonRestantes);
  }

  //Vaciar por completo la lista de Pokemons y el array de contexto
  const limpiarLista = ()=>{
    const confirmated = confirm(`¿Deseas vaciar tu Pokedex?`);

      if (confirmated){
        updateAllPokemon([]);
      };

  }

  //Pintar los Pokemon que contiene el estado que vive en App y llegan por contexto
  const paintPokelist = () => {
    return allPokemon.map((element, i) => (
  
    //  Pasar al elemento card por params los datos necesarios   
      <>
        <Card
          name={element.name.toUpperCase()}
          id={element.id}
          peso={element.weight / 10}
          altura={element.height * 10}
          foto={element.foto}
          color={element.color}
          type1={element.type1}
          type2={element.type2}
          descripcion={element.descripcion.replace(/(\n)/gm, " ").replace(/(\f)/gm, " ")}
          quitarPokemon={() => quitarPokemon(i)}
        />
      </> 
    ));
  };


  return(
    <>
      <section>
        {allPokemon.length > 0 && <button onClick={limpiarLista}>Limpiar</button>}
        {paintPokelist()}
      </section>
    </>
  )


};

export default ListaPokemon;
