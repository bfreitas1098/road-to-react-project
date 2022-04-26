import React from "react";

export const Item = (props) => {
  const { item } = props;

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

// Displayed each item of the stories objects from App.Js using the "item" props from List.Js
