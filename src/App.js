import React, { useState } from "react";
import logo from "./logo.svg";
import Players from "./Players";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  const [players, setPlayers] = useState([{ id: 1, name: "dude" }]);

  const greet = () => {
    setGreeting("hello web 18");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world!
        </a>
        <button onClick={greet}>greet</button>
        <h4>{greeting}</h4>
        <Players players={players} />
      </header>
    </div>
  );
}

export default App;
