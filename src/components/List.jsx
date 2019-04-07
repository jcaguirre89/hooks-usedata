import React from "react";
import useData from "../hooks/useData";

function List() {
  const [isLoading, data] = useData();

  const listItems = data.items.map((item, idx) => (
    <li key={idx.toString()}>{item}</li>
  ));

  return (
    <div>
      <h3>{isLoading}</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
