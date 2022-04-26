import React, { useState } from "react";

export const Search = ({ onSearch, word }) => {
  const [loaded, setLoaded] = useState(false);

  let handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(true);
    // used this state updater function to change the state from loaded to not loaded (true) when form is submitted
    onSearch();
    // callback function example, refer to App.js
    // recalled this function when form is submitted to get the value of the submitted word
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" onChange={onSearch} />
        <input type="submit" value="Search" />
      </form>
      <p>{loaded ? `Searching for ${word}` : `Enter a search word.`}</p>
      {/* the ternary operator states that if loaded = true, like it is in the handleSubmit function, then display the searchTerm */}
      {/* when loaded = false, in its initial state using the useState hook passed down as props from App.js, then display the other sentence */}
    </div>
  );
};
