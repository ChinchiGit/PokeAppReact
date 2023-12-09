import React, { useState, useEffect, useContext } from "react";
import axios from "axios"; 
import { useDebounce } from "use-debounce";
import { PokemonListContext } from "../../../../context/PokemonListContext";

const Search = () => {
  const { allPokemon, updateAllPokemon } = useContext(PokemonListContext);
  const [inputState, setInputState] = useState("");
  const [debouncedValue] = useDebounce(inputState, 3000); 


  
  //cuando se cumple el tiempo de Debounce manda el contenido del inputState al fetch
  useEffect(() => {
    if (debouncedValue) {
      fetchData();
    }
  }, [debouncedValue]);

  //almacena en inputState cada cambio en el formulario
  const handleChange = (e) => {
    setInputState(e.target.value);
  };

  //vacia inputState
  const handleReset = () => {
    setInputState("");
  };

  //Hace Fecth a PokeApi con lo que ha introducido el usuario
  const fetchData = async () => {
    try {
      // Petición HTTP
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputState}`);
      const json = res.data;

      const res2 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${inputState}`
      );
      const json2 = res2.data;

      // Objeto que ordena los datos que provienen de los dos endpoint
      const objectPokemon = {
        name: json.name,
        id: json.id,
        weight: json.weight,
        height: json.height,
        foto:
          json.sprites.other["official-artwork"].front_default ||
          json.sprites.front_default, //posibles ubicaciones de la imagen
        color: json2.color.name,
        descripcion: json2.flavor_text_entries[0].flavor_text,
      };

      // Guarda resultados en el estado de context que vive en APP
      updateAllPokemon([objectPokemon, ...allPokemon]);
      handleReset();
    } catch (e) {
      console.error("Error en la petición de datos:", e);
      handleReset();
    }
  };

  return (
    <>
      <input type="text" value={inputState} onChange={handleChange} />
      <button onClick={fetchData} disabled={!inputState}>
        BUSCAR
      </button>

    </>
  );
};

export default Search;
