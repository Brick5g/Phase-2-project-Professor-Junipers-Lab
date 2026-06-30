import { useState } from "react";

function SavePokemonForm({ pokemon }) {
  const [nickname, setNickname] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const savedPokemon = {
      pokemonName: pokemon.name,
      pokemonId: pokemon.id,
      sprite: pokemon.sprites.front_default,
      nickname: nickname,
      reason: reason
    };

  fetch("http://localhost:3001/team", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(savedPokemon)
})
  .then((response) => response.json())
  .then((newSavedPokemon) => {
    console.log(newSavedPokemon);
  });

    setNickname("");
    setReason("");
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <h3>Save to My Team</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
        />
        <br />
        <textarea
          placeholder="Why are you saving this Pokémon?"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
        <br />
        <button type="submit">
          Save Pokémon
        </button>
      </form>
    </div>
  );
}

export default SavePokemonForm;