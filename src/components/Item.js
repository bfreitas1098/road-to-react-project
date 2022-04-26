import React from "react";

export const Item = ({ item }) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.num_comments} </span>
      <span>{item.points}</span>
    </li>
  );
};

// Displayed each item of the stories objects from App.js using the "item" props from List.js
