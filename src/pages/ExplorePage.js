import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PokemonDetails from "../components/PokemonDetails";

function ExplorePage() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [pokedexEntry, setPokedexEntry] = useState("");

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

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.name}`)
          .then((response) => response.json())
          .then((speciesData) => {
            const englishEntry = speciesData.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            );
            setPokedexEntry(englishEntry.flavor_text);
          });
      })
      .catch(() => {
        setPokemon(null);
        setPokedexEntry("");
        setError("Pokémon not found. Try another name or number.");
      });
  }

  return (
    <div>
      <h2>Explore Pokémon</h2>
      <SearchBar onSearch={searchPokemon} />
      {error ? <p>{error}</p> : null}
      <PokemonDetails
        pokemon={pokemon}
        pokedexEntry={pokedexEntry}
      />
    </div>
  );
}

export default ExplorePage;