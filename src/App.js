import React from "react";
import "./App.css";
import { List } from "./List";
import { Search } from "./Search";

export const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
};
