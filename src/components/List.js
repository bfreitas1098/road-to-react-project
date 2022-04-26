import React from "react";
import { Item } from "./Item";

export const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

// Mapped through the stories array which was passed as a props named "list" to this component and filtered by title in the App.js
// Used the objectID's in each object as a key
// Used the item parameter I created for this mapping function as a props for the Item.js
