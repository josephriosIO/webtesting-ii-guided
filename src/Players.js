import React from "react";

function Players(props) {
  const { players = [] } = props;
  console.log(players);

  if (!players || !players.length > 0) {
    return <h3>no players available</h3>;
  }
  return (
    <>
      <h3>Player List</h3>

      {players.map(p => (
        // each player should have id and name
        <div data-testid="player-name" key={p.id}>
          {p.name}
        </div>
      ))}
    </>
  );
}

export default Players;
