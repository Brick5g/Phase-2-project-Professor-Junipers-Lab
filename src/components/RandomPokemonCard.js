function RandomPokemonCard({ pokemon }) {
  if (!pokemon) return null;
  return (
    <div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <p>Pokédex #: {pokemon.id}</p>
      <p>
        Type:{" "}
        {pokemon.types
          .map((type) => type.type.name)
          .join(", ")}
      </p>
    </div>
  );
}

export default RandomPokemonCard;