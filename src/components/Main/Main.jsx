import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home"
import PokemonContainer from "./PokemonContainer/PokemonContainer";
import FormularioCrear from "./FormularioCrear/FormularioCrear";
import Details from "./Details/Details"


const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<PokemonContainer/>} />
          <Route path="/new" element={<FormularioCrear/>} />
          <Route path="/pokemon/:id" element={<Details/>} />
          <Route path="/*" element={<Navigate to={"/search"} />} />
        </Routes>
      </main>

    </>
  );
};

export default Main;
