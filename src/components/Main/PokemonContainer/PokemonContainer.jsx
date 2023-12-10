import React, {useState}from "react";
import ListaPokemon from "./ListaPokemon"
import Search from "./Search"

//Este componente servia en la fase 1 para la Comunicación Sibling-Sibling entre Search y ListaPokemon.
//En la fase 2 no tiene esa funcionalidad ya que los datos se comparten por contexto.

const PokemonContainer = () => {

  // const[searchItem, setItemState] = useState("");

  // const updateSearchItem=(item)=>{
  //   setItemState(item);
  // }



  return(
    <>
      <Search/>
      <ListaPokemon/>
    </>
  )
};

export default PokemonContainer;
