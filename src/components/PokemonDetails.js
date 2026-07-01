import MoveList from "./MoveList";
import EvolutionLine from "./EvolutionLine";
import SavePokemonForm from "./SavePokemonForm";
import { capitalize } from "../helpers";


function PokemonDetails({ pokemon, pokedexEntry, evolutionLine }) {
  if (!pokemon) return null;

  const heightInFeet = (pokemon.height * 0.328084).toFixed(1);
  const weightInPounds = (pokemon.weight * 0.220462).toFixed(1);
  const bst = pokemon.stats.reduce(
    (total, stat) => total + stat.base_stat,
    0
  );
  
 return (
  <div className="pokemon-details-grid">
    <div className="details-panel">
      <h3>{capitalize(pokemon.name)}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Pokédex #: {pokemon.id}</p>
      <div className="type-container">
        {pokemon.types.map((typeObj) => (
          <span
            key={typeObj.type.name}
            className={`type-badge ${typeObj.type.name}`}
          >
            {capitalize(typeObj.type.name)}
          </span>
        ))}
      </div>
      <p>Height: {heightInFeet} ft.</p>
      <p>Weight: {weightInPounds} lbs.</p>
      <p>Base Stat Total: {bst}</p>
    </div>

  <div className="stats-panel">
    <h3>Base Stats</h3>
    {pokemon.stats.map((statObj) => {
      return (
        <div className="stat-row" key={statObj.stat.name}>
        <span>{statObj.stat.name}</span>
        <div className="stat-bar">
          <div
            className="stat-fill"
            style={{ width: `${statObj.base_stat / 255 * 100}%` }}
          ></div>
        </div>
        <strong>{statObj.base_stat}</strong>
    </div>
    );
  })}

  <p className="stat-total">Total: {bst}</p>
  </div>

    <div className="moves-panel">
      <MoveList moves={pokemon.moves} />
    </div>

    <div className="dex-panel">
      <h3>Pokédex Entry</h3>
      <p>{pokedexEntry}</p>
      <EvolutionLine evolutionLine={evolutionLine} />
      <SavePokemonForm pokemon={pokemon} />
    </div>
  </div>
  );
}

export default PokemonDetails;

