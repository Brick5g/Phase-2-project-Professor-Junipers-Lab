import { useEffect, useState } from "react";

function TeamPage() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/team")
      .then((response) => response.json())
      .then((teamData) => {
        setTeam(teamData);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3001/team/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedTeam = team.filter((pokemon) => pokemon.id !== id);
      setTeam(updatedTeam);
    });
  }

  function generateRandomTeam() {
    const spotsLeft = 6 - team.length;

    if (spotsLeft === 0) {
      alert("Your team is already full!");
      return;
    }
    console.log(`Need to add ${spotsLeft} Pokémon`);

    for (let i = 0; i < spotsLeft; i++) {
      const randomNumber = Math.floor(Math.random() * 1025) + 1;

      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then((response) => response.json())
        .then((pokemonData) => {

          const randomPokemon = {
            pokemonName: pokemonData.name,
            pokemonId: pokemonData.id,
            sprite: pokemonData.sprites.front_default,
            nickname: "",
            reason: "Random Team Generator"
          };

          fetch("http://localhost:3001/team", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(randomPokemon)
          })
            .then((response) => response.json())
            .then((savedPokemon) => {
              setTeam((currentTeam) => [
                ...currentTeam,
                savedPokemon
              ]);
            });
        });
    }
  }


  return (
    <div className="page-card">
      <h2>My Team ({team.length}/6)</h2>
      <button onClick={generateRandomTeam}>Fill Random Team!</button>
      {team.length === 0 ? (
        <p>No Pokémon added yet. Go catch some Pokémon!</p>
      ) : null}

      <div className="team-container">
        {team.map((pokemon) => {

          return (
            <div className="team-card" key={pokemon.id}>
              <img
                src={pokemon.sprite}
                alt={pokemon.pokemonName}
              />
              <h3>{pokemon.nickname}</h3>

              <p>
                Species:{" "}
                {pokemon.pokemonName.charAt(0).toUpperCase() +
                  pokemon.pokemonName.slice(1)}
              </p>

              <p>Pokédex #: {pokemon.pokemonId}</p>
              <p>Reason: {pokemon.reason}</p>
              <button onClick={() => handleDelete(pokemon.id)}>
                Remove from Team
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamPage;