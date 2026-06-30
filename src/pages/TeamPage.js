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

  return (
    <div className="page-card">
      <h2>My Team ({team.length}/6)</h2>
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