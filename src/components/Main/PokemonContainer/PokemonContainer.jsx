import React, {useState}from "react";
import ListaPokemon from "./ListaPokemon"
import Search from "./Search"

const PokemonContainer = () => {
  const[searchItem, setItemState] = useState("");

  const updateSearchItem=(item)=>{
    setItemState(item);
  }



  return(
    <>
      <Search updateSearchItem={updateSearchItem}/>
      <ListaPokemon searchItem={searchItem}/>
    </>
  )
};

export default PokemonContainer;
