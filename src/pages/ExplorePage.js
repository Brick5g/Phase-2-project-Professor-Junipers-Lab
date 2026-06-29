import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RandomPokemonCard from "../components/RandomPokemonCard";

function ExplorePage() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  function searchPokemon(searchText) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Pokemon not found");
        }
      })
      .then((pokemonData) => {
        setPokemon(pokemonData);
        setError("");
      })
      .catch(() => {
        setPokemon(null);
        setError("Pokémon not found. Try another name or number.");
      });
  }

  return (
    <div>
      <h2>Explore Pokémon</h2>
      <SearchBar onSearch={searchPokemon} />
      {error ? <p>{error}</p> : null}
      <RandomPokemonCard pokemon={pokemon} />
    </div>
  );
}

export default ExplorePage;