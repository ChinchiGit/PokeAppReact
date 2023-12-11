import React, { useContext } from "react";
import Card from "./Card";
import { PokemonListContext } from "../../../../context/PokemonListContext";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const ListaPokemon = () => {
  //Cotexto
  const { allPokemon, updateAllPokemon } = useContext(PokemonListContext);

  //Eliminar un Pokemon de la lista quitandolo rel array contexto
  const quitarPokemon = (i) => {
    const pokemonRestantes = allPokemon.filter((pokemon, j) => i !== j);
    updateAllPokemon(pokemonRestantes);
  }

  //Vaciar por completo la lista de Pokemons y el array de contexto
  const limpiarLista = () => {
    const confirmated = confirm(`¿Deseas vaciar tu Pokedex?`);

    if (confirmated) {
      updateAllPokemon([]);
    };

  }

  //Pintar los Pokemon que contiene el estado que vive en App y llegan por contexto
  const paintPokelist = () => {
    return allPokemon.map((element, i) => (

      //  Pasar al elemento card por params los datos necesarios
      //  El formulario para crear nuevos pokemon tiene menos campos segun las instrucciones del ejercicio. Se establece "desconocido" como alternativa para las propiedades que el usuariono puede facilitar.   
      <>
        <SwiperSlide className="swipper">
          <Card
            key={element.id}
            name={element.name.toUpperCase()}
            id={element.id}
            peso={element.weight ? element.weight / 10 : "desconocido"}
            altura={element.height ? element.height * 10 : "desconocido"}
            foto={element.foto}
            color={element.color ? element.color : "aquamarine"}
            type1={element.type1}
            type2={element.type2}
            descripcion={element.descripcion ? element.descripcion.replace(/(\n)/gm, " ").replace(/(\f)/gm, " ") : "desconocido"}
            quitarPokemon={() => quitarPokemon(i)}
          />
        </SwiperSlide>
      </>
    ));
  };


  return (
    <>
      <section className="listaPokemon">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {paintPokelist()}
          {allPokemon.length > 0 && <button id="botonLimpiarLista" onClick={limpiarLista}>Limpiar</button>}
        </Swiper>
      </section>
    </>
  )


};

export default ListaPokemon;
