import React,{useState} from "react";

const Search = ({updateSearchItem}) => {
  const[inputState, setInputState] = useState("");
  

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
