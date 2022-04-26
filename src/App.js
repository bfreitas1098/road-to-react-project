import React, { useState } from "react";
import "./App.css";
import { List } from "./List";
import { Search } from "./Search";

const stories = [
  {
    title: "React",
    url: "https://react.js/org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>My App</h1>
      <Search onSearch={handleSearch} word={searchTerm} />
      {/* passing the callback function to Search.Js as a props */}
      <hr />
      <List list={stories} />
    </div>
  );
};
