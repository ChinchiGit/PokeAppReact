import React,{useState, useEffect} from "react";
import { useDebounce } from 'use-debounce';

const Search = ({updateSearchItem}) => {
  const[inputState, setInputState] = useState("");
  const [value] = useDebounce(inputState, 5000);

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
