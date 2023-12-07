import React, {useState, useEffect} from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";



// import ErrorMessage from './ErrorMessage/ErrorMessage';

const ListaPokemon = ({searchItem}) => {

  const [searchList, setSearchList] = useState([]);
  // const [fetchStatus, setFetchStatus] = useState();

  
  
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchItem}`)
        const json = res.data


        const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchItem}`)
        const json2 = res2.data


        const objectPokemon = {
          name: `${json.name}`,
          id: `${json.id}`,
          weight: `${json.weight}`,
          height: `${json.height}`,
          foto:`${json["sprites"]["other"]["official-artwork"]["front_default"]}`,
          color: `${json2.color.name}`,
          descripcion: `${json2.flavor_text_entries[0]["flavor_text"]}`
        }

        // Guarda en el array de posts el resultado. Procesa los datos
        setSearchList([objectPokemon, ...searchList]);
        // setFetchStatus(true);
      }catch(e){
        setSearchList(searchList); // No pintes nada 
      }
    }

    fetchData();
  }, [searchItem]); // componentDidUpdate

  const quitarPokemon= (i) =>{
    const pokemonRestantes = searchList.filter((pokemon, j) => i!==j);
    setSearchList(pokemonRestantes);
  }

  const limpiarLista = ()=>{
    const confirmated = confirm(`¿Deseas vaciar tu Pokedex?`);

      if (confirmated){
        setSearchList([]);
      };

  }

  const paintPokelist = () => {

      return searchList.map((element, i) => (
        <Card
          key={uuidv4()}
          name={element.name.toUpperCase()}
          id={element.id}
          peso={element.weight/10}
          altura={element.height*10}
          foto={element.foto}
          color={element.color}
          descripcion={element.descripcion.replace(/(\n)/gm," ").replace(/(\f)/gm," ")}
          quitarPokemon={()=>quitarPokemon(i)}
        />
      ));
  };



  return(
    <>
      <section>
        {searchList.length > 0 && <button onClick={limpiarLista}>Limpiar</button>}
        {paintPokelist()}
      </section>
    </>
  )


};

export default ListaPokemon;
