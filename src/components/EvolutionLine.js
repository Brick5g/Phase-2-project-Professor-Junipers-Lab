function EvolutionLine({ evolutionLine }) {
  if (evolutionLine.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>Evolution Line</h3>

      {evolutionLine.map((pokemonName, index) => {
        return (
          <div key={pokemonName}>
            <p>{pokemonName}</p>
            {index !== evolutionLine.length - 1 ? <p>↓</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default EvolutionLine;