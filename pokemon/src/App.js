import React from "react";
import "./App.css";

import PokemonList from "./PokemonList";
import CapturedPokemon from "./CapturedPokemon";
import { PokemonProvider } from "./PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemon />
      </div>
    </PokemonProvider>
  );
}

export default App;
