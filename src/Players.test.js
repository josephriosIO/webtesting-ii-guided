import React from "react";
import Players from "./Players";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";

describe("<Players /> ", () => {
  it("render players", () => {
    const players = [
      { id: 1, name: "same" },
      { id: 2, name: "dude" },
      { id: 3, name: "son" }
    ];
    const { getAllByTestId } = render(<Players players={players} />);
    const playerNames = getAllByTestId("player-name").map(n => n.textContent);
    const names = players.map(p => p.name);

    expect(playerNames).toHaveLength(players.length);
    expect(playerNames).toEqual(names);
  });
  it("no render no players", () => {
    const { getByText } = render(<Players />);
    getByText(/no players available/i);
  });
});
