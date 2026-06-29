function RandomPokemonCard({ pokemon }) {
  if (!pokemon) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default RandomPokemonCard;