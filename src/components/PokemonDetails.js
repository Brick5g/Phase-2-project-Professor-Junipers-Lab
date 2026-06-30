import MoveList from "./MoveList";
import EvolutionLine from "./EvolutionLine";
import SavePokemonForm from "./SavePokemonForm";

function PokemonDetails({
  pokemon,
  pokedexEntry,
  evolutionLine
  }) {
    if (!pokemon) {
    return null;
    }

  const types = pokemon.types
    .map((typeObj) => typeObj.type.name)
    .join(", ");

  const heightInFeet = (pokemon.height * 0.328084).toFixed(1);
  const weightInPounds = (pokemon.weight * 0.220462).toFixed(1);
  const bst = pokemon.stats.reduce(
    (total, stat) => total + stat.base_stat,
    0
  );
  
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
      <p>Base Stat Total: {bst}</p>
      <p>Pokédex Entry: {pokedexEntry}</p>
      <MoveList moves={pokemon.moves} />
      <EvolutionLine evolutionLine={evolutionLine} />
      <SavePokemonForm pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetails;
  

