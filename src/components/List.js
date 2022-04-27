import React from "react";
import { Item } from "./Item";

export const List = ({ list }) => (
  <ul>
    {/* used a spread and rest operator to separate the objectID to use as a key and send the item object and all its properties as props to List.js*/}
    {list.map(({ objectID, ...item }) => (
      <Item key={objectID} {...item} />
    ))}
  </ul>
);

// Mapped through the stories array which was passed as a props named "list" to this component and filtered by title in the App.js
// Used the objectID's in each object as a key
// Used the item parameter I created for this mapping function as a props for the Item.js
// written as a concise body
