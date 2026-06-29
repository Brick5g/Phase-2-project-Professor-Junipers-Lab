import { useEffect, useState } from "react";

import RandomPokemonCard from "../components/RandomPokemonCard";
import RandomPokemonButton from "../components/RandomPokemonButton";

function HomePage() {
  const [pokemon, setPokemon] = useState(null);

  function fetchRandomPokemon() {
    const randomNumber =
      Math.floor(Math.random() * 1025) + 1;

    fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    )
      .then((response) => response.json())
      .then((pokemonData) => {
        setPokemon(pokemonData);
      });
  }

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div>
      <h2>
        Welcome to Professor Juniper's Lab
      </h2>

      <RandomPokemonCard
        pokemon={pokemon}
      />

      <RandomPokemonButton
        onRandomPokemon={
          fetchRandomPokemon
        }
      />
    </div>
  );
}

export default HomePage;