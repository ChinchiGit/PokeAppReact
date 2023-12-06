import React, {useState, useEffect} from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

// import ErrorMessage from './ErrorMessage/ErrorMessage';

const ListaPokemon = ({searchItem}) => {

  const [searchList, setSearchList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState()
  
  
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchItem}`)
        const json = res.data
        // Guarda en el array de posts el resultado. Procesa los datos
        setSearchList([...searchList,json]);
        setFetchStatus(true);
      }catch(e){
        setSearchList([]); // No pintes nada 
        setFetchStatus(false);
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
    if (fetchStatus==true){
      return searchList.map((element, i) => (
        <Card
          key={uuidv4()}
          name={element.name.toUpperCase()}
          id={element.id}
          peso={element.weight}
          altura={element.heigth}
          foto={element["sprites"]["other"]["official-artwork"]["front_default"]}
          quitarPokemon={()=>quitarPokemon(i)}
        />
      ));
    } else {
      // return (
      //   <ErrorMessage
      //   />
      // )
     
    } 
    
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
