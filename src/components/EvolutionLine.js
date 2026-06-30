function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function EvolutionLine({ evolutionLine }) {
  if (evolutionLine.length === 0) {
    return null;
  }

  return (
    <div className="evolution-line">
      <h3>Evolution Line</h3>

      {evolutionLine.map((pokemonName, index) => {
        return (
          <div key={pokemonName}>
            <p>{capitalize(pokemonName)}</p>
            {index !== evolutionLine.length - 1 ? <p>↓</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default EvolutionLine;