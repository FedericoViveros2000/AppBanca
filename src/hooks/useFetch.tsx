import { useState, useEffect } from "react";
//import { AppState } from "../interfaces/userInterface";

const useFetch = (enpoint: string = "") => {
  const ENPOINT_PLACEHOLDER = "https://jsonplaceholder.typicode.com/users";

  let [data, setData] = useState<[]>([]);
  let [isFetching, setIsFetching] = useState<boolean>(false);

  const getData = async () => {
    try {
      setIsFetching(true);
      let response = await fetch(ENPOINT_PLACEHOLDER);
      let data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, 5000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isFetching,
  };
};

export { useFetch };
