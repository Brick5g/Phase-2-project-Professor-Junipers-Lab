function RandomPokemonButton ({ onRandomPokemon }) {
  return (
    <button onClick={onRandomPokemon}>
      Generate Random Pokémon
    </button>
  );
}
export default RandomPokemonButton;