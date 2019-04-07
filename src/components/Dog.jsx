import React, { useState } from "react";
import useData from "../hooks/useData";

function Dog({ breed }) {
  const path = `https://dog.ceo/api/breed/${breed}/images/random`;
  const [getData, isLoading, data, error] = useData(path);

  return (
    <div>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : error ? (
        <span>Breed not found</span>
      ) : (
        <div>
          <h2>{breed}</h2>
          <img src={data.message} />
          <br />
          <button onClick={getData}>Get another one!</button>
        </div>
      )}
    </div>
  );
}

export default Dog;
