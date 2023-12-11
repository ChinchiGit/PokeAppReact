import React, { useEffect, useState} from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';


const Home = () => {
  const[totalPokemon, setTotalPokemon] = useState([]);
  


  
  //Fetch para obtener todos los pokemon y mostrar un listado. Se hace una sola vez ([]).  
  useEffect(() => {
    async function getAll() {
      try{
        const resHome = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1017`)
        const jsonHome = await resHome.data.results
        setTotalPokemon(jsonHome);
        
      }catch(e){
        console.error("Error en la petición de datos:", e)
        setTotalPokemon(totalPokemon);
      }
    }

    getAll();

  }, []);


  
  const paintAll = () => {
    return totalPokemon.map((element, i) => (
      <article key={i + 1} className="pokemonIdName">
        <div id= "pokemonId">
          <h3 >#{i + 1}</h3>
        </div>
        <div id="pokemonName" >
          <h3>{element.name}</h3>
        </div>
      </article>
    ));
  };
   




  return (
    <>
      <section>
        <h1>Bienvenido al mundo Pokemon</h1>
        <p>¡Mira todos los que podrás cazar!</p>
      </section>
      <section id="totalPokemonContainer">
        {paintAll()}
      </section>
      <span></span>

    </>
  );
}



export default Home;