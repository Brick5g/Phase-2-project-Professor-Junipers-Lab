function MoveList({ moves }) {
  const levelUpMoves = moves.filter((moveObj) => {
    return moveObj.version_group_details.some((detail) => {
      return detail.move_learn_method.name === "level-up";
    });
  });

  const machineMoves = moves.filter((moveObj) => {
    return moveObj.version_group_details.some((detail) => {
      return detail.move_learn_method.name === "machine";
    });
  });

  const sortedLevelUpMoves = levelUpMoves.sort((a, b) => {
    const levelA = a.version_group_details.find((detail) => {
      return detail.move_learn_method.name === "level-up";
    });

    const levelB = b.version_group_details.find((detail) => {
      return detail.move_learn_method.name === "level-up";
    });

    return levelA.level_learned_at - levelB.level_learned_at;
  });

  return (
    <div>
      <h3>Level-Up Moves</h3>
      {sortedLevelUpMoves.map((moveObj) => {
        const levelInfo = moveObj.version_group_details.find((detail) => {
          return detail.move_learn_method.name === "level-up";
        });

        return (
          <p key={moveObj.move.name}>
            Lv. {levelInfo.level_learned_at} - {moveObj.move.name}
          </p>
        );
      })}

      <h3>TM/HM Moves</h3>
      {machineMoves.map((moveObj) => {
        return (
          <p key={moveObj.move.name}>
            {moveObj.move.name}
          </p>
        );
      })}
    </div>
  );
}

export default MoveList;