import React, { useState, useEffect } from "react";

function useData(path) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const checkStatus = response => {
    if (!response.ok) {
      setError(true);
      throw Error(response.statusText);
    } else {
      setError(false);
      return response;
    }
  };

  const getData = () => {
    setIsLoading(true);
    return fetch(path, {
      method: "get"
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(response => setData(response))
      .then(() => setIsLoading(false))
      .catch(function(error) {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    //Fetch data whenever path changes
    getData();
  }, [path]);

  return [getData, isLoading, data, error];
}

export default useData;
