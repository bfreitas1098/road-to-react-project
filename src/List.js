import React from "react";
import { Item } from "./Item";

export const List = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};
