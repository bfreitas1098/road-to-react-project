import React, { useState, useEffect } from "react";
import { List } from "./List";
import { Input } from "./Input";

import "../styles/App.css";

// created a custom hook to synchronize the state with the browser's local storage
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) ?? initialState);
  // used a nullish coalescing operator to set the default search to the initialState if the search is null or undefined
  // value and setValue are used in this case to be more generic and reusable, when the semiPersistentState is called in the App component,
  // the key becomes `search` which is the searchTerm and the initialState is `React`
  // the key is necessary so that if this hook is reused each value will be unique and function properly, or else it could be overwritten
  // in the useState hook here we are getting the key or initialState from the local storage

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  // the side-effect in the useEffect hook is setting the key & value in local storage, and they are also included in the dependency array so that
  // the hook will know to run when the component is first mounted and when it is updated

  return [value, setValue];
  // this return array is necessary to be able to use these state values in the component that the custom hook is being called in; (App in this case)
};

// written as a block body because there are multiple lines of processing code before the return statement
export const App = () => {
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

  const [searchTerm, setSearchTerm] = useSemiPersistentState(`search`, `React`);

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
    <>
      <h1>My App</h1>
      <Input
        id="search"
        value="Search"
        word={searchTerm}
        onInputChange={handleSearch}
      />
      {/* passing the callback function to Search.js as a props */}
      <hr />
      <List list={searchedStories} />
    </>
  );
};
