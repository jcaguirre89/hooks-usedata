import React, { useState } from "react";
import Dog from "./Dog";

function Main() {
  const defaultBreed = "Akita";
  const [breed, setBreed] = useState(defaultBreed);
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setBreed(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Get</button>
      </form>
      <Dog breed={breed} />
    </div>
  );
}

export default Main;
