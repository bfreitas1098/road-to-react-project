import React from "react";

// used nested destructuring here after sending the item object in a spread operator to this component
export const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title} </a>
    </span>
    <span>{author} </span>
    <span>{num_comments} </span>
    <span>{points}</span>
  </li>
);

// Displayed each item of the stories objects from App.js using the "item" props from List.js
// written as a concise body
