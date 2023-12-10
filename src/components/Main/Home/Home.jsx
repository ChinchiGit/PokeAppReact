import React, { useEffect, useState} from "react";
import axios from "axios";


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
      <article key={i + 1}>
        <h3>#{i + 1}</h3>
        <h3>{element.name}</h3>
      </article>
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