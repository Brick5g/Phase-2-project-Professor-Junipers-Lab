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
    <div>
      <h2>My Team</h2>

      {team.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.sprite} alt={pokemon.pokemonName} />

            <h3>{pokemon.nickname}</h3>

            <p>Species: {pokemon.pokemonName}</p>
            <p>Pokédex #: {pokemon.pokemonId}</p>
            <p>Reason: {pokemon.reason}</p>
            <button onClick={() => handleDelete(pokemon.id)}>
              Remove from Team
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TeamPage;