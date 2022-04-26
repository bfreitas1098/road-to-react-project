import React, { useState } from "react";

export const Search = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  let handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let handleSubmit = (event) => {
    props.onSearch(event);
    // callback function example, refer to App.Js
    setLoaded(true);
    // used this state updater function to change the state from loaded to not loaded (true) when form is submitted
    handleChange();
    // recalled this function when form is submitted to get the value of the submitted word
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <p>{loaded ? `Searching for ${searchTerm}` : `Enter a search word.`}</p>
      {/* the ternary operator states that if loaded = true, like it is in the handleSubmit function, then display the searchTerm */}
      {/* when loaded = false, in its initial state using the useState hook, then display the other sentence */}
    </div>
  );
};
