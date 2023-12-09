import React,{useState, useEffect, useContext} from "react";
import { useDebounce } from 'use-debounce';
import { PokemonListContext } from "../../../../context/PokemonListContext";

const Search = ({updateSearchItem}) => {
  const { allPokemon} = useContext(PokemonListContext);
  const[inputState, setInputState] = useState("");
  const [value] = useDebounce(inputState, 5000);

  console.log(allPokemon);

  // const findInContext = (search) =>{
  //   if (search.type == number){
  //     enviar(search+1)
  //   }; 

  //   if (search.type == string ){
  //     en
  //   }
  // }


  useEffect(() => {
    enviar();
  }, [value]);

  const handleChange = (e)=>{
    e.preventDefault();
    setInputState(e.target.value);
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };


  const enviar = () =>{
    updateSearchItem(inputState);
    handleReset();
    
  };



  return(
    <>
      <input type="text" onChange={handleChange}/>
      <button onClick={enviar}>BUSCAR</button>
    </>

  )




};

export default Search;
