import { useEffect, useState } from "react";
import RandomPokemonCard from "../components/RandomPokemonCard";
import RandomPokemonButton from "../components/RandomPokemonButton";
import juniper from "../assets/juniper.jpg";

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
    <div className="page-card">
      <h2>Welcome to Professor Juniper's Lab</h2>

      <RandomPokemonCard
        pokemon={pokemon}
      />

      <RandomPokemonButton
        onRandomPokemon={fetchRandomPokemon}
      />

      <div className="home-info-section">

      <div className="professor-card">
        <img
          src={juniper}
          alt="Professor Juniper"
          className="professor-sprite"
        />
        
        <h3>Professor Juniper</h3>
        
        <p>
        "Welcome to the Pokémon world! Use my lab
        to research Pokémon and build your dream team."
        </p>
        
      </div>

      <div className="instructions-card">
        <h3>Welcome, Trainer!</h3>

        <p>My trainers from the PCA did extensive research on all kinds of Pokémon so that you don't have to!</p> 

        <p>• Visit Explore to search Pokémon by name or Pokédex number.</p>

        <p> • View base stats, movesets, and evolution lines.</p>

        <p> • Save your favorite Pokémon to My Team.</p>

        <p> • Build your ultimate team of six Pokémon.</p>
      </div>

      </div>
    </div>
  );
}

export default HomePage;