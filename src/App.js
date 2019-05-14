import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

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
      </header>
    </div>
  );
}

export default App;
