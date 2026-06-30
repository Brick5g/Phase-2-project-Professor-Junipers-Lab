function RandomPokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="random-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <p>Pokédex #: {pokemon.id}</p>
      <div className="type-container">
        {pokemon.types.map((typeObj) => (
          <span
            key={typeObj.type.name}
            className={`type-badge ${typeObj.type.name}`}
          >
            {typeObj.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RandomPokemonCard;