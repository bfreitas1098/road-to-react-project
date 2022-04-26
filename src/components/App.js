import React, { useState } from "react";
import { List } from "./List";
import { Search } from "./Search";

import "./App.css";

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
  // created a callback function to pass as a props to Search.js so it can update state in its own component

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // filtered through the stories array so it only displays the list when the titles are searched
  // used the toLowerCase function to allow it to understand other spellings of the titles

  return (
    <div>
      <h1>My App</h1>
      <Search onSearch={handleSearch} word={searchTerm} />
      {/* passing the callback function to Search.js as a props */}
      <hr />
      <List list={searchedStories} />
    </div>
  );
};
