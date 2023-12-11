import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PokemonListContext } from "../../../context/PokemonListContext";
import { Link } from 'react-router-dom';

const PokemonForm = () => {
  const { allPokemon, updateAllPokemon } = useContext(PokemonListContext);
  const { control, register, handleSubmit } = useForm();
  const [creado, setCreado] = useState(false); //mensaje de pokemon creado

  const onSubmit = (data) => {
    updateAllPokemon([data, ...allPokemon]);
    setCreado(true);
  };

  return (
    <>
      <h4>¡Crea un nuevo Pokemon!</h4>
      <p>Introduce sus datos</p>
      <form className="crearNuevo" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">ID:</label>
        {/* Controller maneja los inputs con react-hook-form para que no se mande el formulario si no se cumplen las condiciones de validacion en cada campo*/}
        <Controller
          name="id"
          control={control}
          defaultValue={1018}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              required
              min={1018}
              className="htmlForm-control"
              id="id"
            />
          )}
        />
        <label htmlFor="name">Nombre:</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              required
              minLength={3}
              className="htmlForm-control"
              id="name"
            />
          )}
        />
        <label htmlFor="foto">URL Foto:</label>
        <Controller
          name="foto"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              required
              className="htmlForm-control"
              id="image"
            />
          )}
        />
        <label htmlFor="type1">Tipo 1:</label>
        <Controller
          name="type1"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              required
              className="htmlForm-control"
              id="typeOne"
            >
              <option value="electric">Eléctrico</option>
              <option value="grass">Hierba</option>
              <option value="ice">Hielo</option>
              <option value="fighting">Lucha</option>
              <option value="poison">Veneno</option>
              <option value="ground">Tierra</option>
              <option value="flying">Volador</option>
              <option value="psychic">Psíquico</option>
              <option value="bug">Bicho</option>
              <option value="rock">Roca</option>
              <option value="ghost">Fantasma</option>
              <option value="dragon">Dragón</option>
              <option value="dark">Siniestro</option>
              <option value="steel">Acero</option>
              <option value="fairy">Hada</option>
            </select>
          )}
        />
        <label htmlFor="type2">Tipo 2:</label>
        <Controller
          name="type2"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              required
              className="htmlForm-control"
              id="typeTwo"
            >
              <option value="electric">Eléctrico</option>
              <option value="grass">Hierba</option>
              <option value="ice">Hielo</option>
              <option value="fighting">Lucha</option>
              <option value="poison">Veneno</option>
              <option value="ground">Tierra</option>
              <option value="flying">Volador</option>
              <option value="psychic">Psíquico</option>
              <option value="bug">Bicho</option>
              <option value="rock">Roca</option>
              <option value="ghost">Fantasma</option>
              <option value="dragon">Dragón</option>
              <option value="dark">Siniestro</option>
              <option value="steel">Acero</option>
              <option value="fairy">Hada</option>
            </select>
          )}
        />

        <input type="submit" value="Enviar" />
      </form>
      {creado &&
      <section>
        <p>Pokemon creado con éxito. Puedes verlo en tu Pokedex.</p>
        <button><Link  to='/search'>VER POKEDEX</Link></button>
      </section>}
    </>
  );
};

export default PokemonForm;

