import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import { PokemonListContext } from "../../../../context/PokemonListContext";
import { Link } from "react-router-dom";
import { useQueryParams, StringParam } from "query-parameters";

const ListaPokemon = () => {
  //Cotext
  const { allPokemon, updateAllPokemon} = useContext(PokemonListContext);

  const quitarPokemon= (i) =>{
    const pokemonRestantes = allPokemon.filter((pokemon, j) => i!==j);
    updateAllPokemon(pokemonRestantes);
  }

  const limpiarLista = ()=>{
    const confirmated = confirm(`¿Deseas vaciar tu Pokedex?`);

      if (confirmated){
        updateAllPokemon([]);
      };

  }

  const paintPokelist = () => {
    return allPokemon.map((element, i) => (
      <Link
        key={element.id}
        to={{
          pathname: `/pokemon/${element.id}`,
          search: `name=${element.name}&image=${element.foto}&typeOne=${element.color}`
        }}
      >
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
      </Link>
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
