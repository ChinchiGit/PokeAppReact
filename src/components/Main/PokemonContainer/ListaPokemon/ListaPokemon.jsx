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
        console.log(json);
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





};

export default ListaPokemon;
