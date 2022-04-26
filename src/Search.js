import React, { useState } from "react";

export const Search = () => {
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  let handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(true);
    handleChange();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <p>{loaded ? `Searching for ${searchTerm}` : `Enter a search word.`}</p>
    </div>
  );
};
