import React, { useContext } from "react";
import { PokemonContext } from "./PokemonProvider";

const CapturedPokemon = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);

  const releasePokemon = (releasedPokemon) =>
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

  const release = (pokemon) => () => {
    setCapturedPokemons(releasePokemon(pokemon));
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <div className="captured-pokemons">
      <h2>CapturedPokemon</h2>

      {capturedPokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CapturedPokemon;
