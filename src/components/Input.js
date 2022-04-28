import React, { useState } from "react";

// the parameters in my Search component parentheses are the names of my props that were given to this component from the App.js
export const Input = ({ id, word, value, onInputChange, type = `text` }) => {
  const [loaded, setLoaded] = useState(false);

  let handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(true);
    // used this state updater function to change the state from loaded to not loaded (true) when form is submitted
    onInputChange();
    // callback function example, refer to App.js
    // recalled this function when form is submitted to get the value of the submitted word
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id={id} type={type} onChange={onInputChange} />
        <input type="submit" value={value} />
      </form>
      <p>{loaded ? `Searching for ${word}` : `Enter a search word.`}</p>
      {/* the ternary operator states that if loaded = true, like it is in the handleSubmit function, then display the searchTerm */}
      {/* when loaded = false, in its initial state using the useState hook passed down as props from App.js, then display the other sentence */}
    </>
  );
};
// written as a block body because there are multiple lines of processing code before the return statement
