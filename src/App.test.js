import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";

describe("<App />", () => {
  it("renders fine", () => {
    render(<App />);
  });

  it("renders hello world", () => {
    const { getByText } = render(<App />);
    getByText(/hello world!/i);
  });

  it("should greet the team", () => {
    const { getByText } = render(<App />);

    const button = getByText(/greet/i);
    fireEvent.click(button);

    getByText(/hello web 18/i);
  });
});
