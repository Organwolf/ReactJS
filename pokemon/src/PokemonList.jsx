import React, { useContext } from "react";
import { PokemonContext } from "./PokemonProvider";

const PokemonList = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);

  const removePokemonFromList = (removedPokemon) =>
    pokemons.filter((pokemon) => pokemon !== removedPokemon);

  const capture = (pokemon) => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemons(removePokemonFromList(pokemon));
  };

  return (
    <div className="pokemon-list">
      <h2>Pokemon List</h2>

      {pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <span>{pokemon.name}</span>
          <button onClick={capture(pokemon)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
