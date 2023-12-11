import React from "react";
import Nav from "./Nav/Nav";

const Header = () => {
  return(
    <header>
      <section id="banner">
        <img id="pokeball" src="./assets/images/pokeball.gif" alt="pokeball" />
        <img id="pokedex" src="./assets/images/pokemon_react.png" alt="pokeball" />
      </section>
      <Nav/>
    </header>
  )
};

export default Header;
