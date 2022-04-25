import React from "react";
import "./App.css";
import { List } from "./List";

export const App = () => {
  return (
    <div>
      <h1>My App</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <List />
    </div>
  );
};
