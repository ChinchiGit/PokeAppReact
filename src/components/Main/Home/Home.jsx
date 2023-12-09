import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PokemonListContext } from "../../../context/PokemonListContext";


const Home = () => {
  const { allPokemon, updateAllPokemon} = useContext(PokemonListContext);
  const[totalPokemon, setTotalPokemon] = useState([]);
  
  useEffect(() => {
    async function getAll() {
      try{
        // Petición HTTP
        const resHome = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1017`)
        const jsonHome = await resHome.data.results
        setTotalPokemon(jsonHome);
        
      }catch(e){
        setTotalPokemon(totalPokemon);
      }
    }

    getAll();

  }, []);



  // useEffect(() => {
  //   console.log("mandando cosas a contexto")
  //   updateAllPokemon(totalPokemon);
  //   // console.log(allPokemon)
  // }, [totalPokemon]);
  
 


  const paintAll= () => {

    return totalPokemon.map((element, i) => (
      <>
        <article>
          <h3>#{i+1}</h3>
          <h3>{element.name}</h3>
        </article>
      </>

    ));
};

  return (
    <>
      <section>
        <h1>Bienvenido al mundo Pokemon</h1>
      </section>
      <section>
        {paintAll()}
      </section>

    </>
  )
};

export default Home;