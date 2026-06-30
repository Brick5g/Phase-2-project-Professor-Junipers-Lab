import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PokemonDetails from "../components/PokemonDetails";

function ExplorePage() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [pokedexEntry, setPokedexEntry] = useState("");
  const [evolutionLine, setEvolutionLine] = useState([]);

  function searchPokemon(searchText) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchText.trim().toLowerCase()}`)
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

            fetch(speciesData.evolution_chain.url)
              .then((response) => response.json())
              .then((evolutionData) => {
                const firstEvolution = evolutionData.chain.species.name;
                let evolutionNames = [firstEvolution];

                if (evolutionData.chain.evolves_to.length > 0) {
                  const secondEvolution =
                  evolutionData.chain.evolves_to[0].species.name;
                  evolutionNames.push(secondEvolution);

                if (evolutionData.chain.evolves_to[0].evolves_to.length > 0) {
                  const thirdEvolution =
                  evolutionData.chain.evolves_to[0].evolves_to[0].species.name;
                  evolutionNames.push(thirdEvolution);
                   }
                }
                setEvolutionLine(evolutionNames);
              });
          });
      })
      .catch(() => {
        setPokemon(null);
        setPokedexEntry("");
        setEvolutionLine([]);
        setError("Pokémon not found. Try another name or number.");
      });
  }

  return (
    <div className="page-card">
      <h2>Explore Pokémon</h2>
      <SearchBar onSearch={searchPokemon} />
      {error ? <p>{error}</p> : null}
      <PokemonDetails
        pokemon={pokemon}
        pokedexEntry={pokedexEntry}
        evolutionLine={evolutionLine}
      />
    </div>
  );
}

export default ExplorePage;