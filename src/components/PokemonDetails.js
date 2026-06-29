function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  const types = pokemon.types
    .map((typeObj) => typeObj.type.name)
    .join(", ");

  const heightInFeet = (pokemon.height * 0.328084).toFixed(1);
  const weightInPounds = (pokemon.weight * 0.220462).toFixed(1);
  
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p>Pokédex #: {pokemon.id}</p>
      <p>Type: {types}</p>
      <p>Height: {heightInFeet} ft.</p>
      <p>Weight: {weightInPounds} lbs.</p>
    </div>
  );
}

export default PokemonDetails;
  

