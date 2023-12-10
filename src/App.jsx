import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { PokemonListContext } from './context/PokemonListContext';



function App() {
  //Estado que se comparte por contexto con todos los componentes
  const [allPokemon, setAllPokemon] = useState([]);

  //Funcion para modificar el anterior estado. Se comparte por ontexto.
  const updateAllPokemon = (newPokemon) => {
    setAllPokemon(newPokemon);
  };
  const pokemonListData = { allPokemon, updateAllPokemon};

  return (
    <>
      <BrowserRouter>
        <PokemonListContext.Provider value={pokemonListData}>  
          <Header/>
          <Main/>
        </PokemonListContext.Provider>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
