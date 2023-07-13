import axios from "redaxios";
import { useEffect, useState } from "react";

export function useFetch(param) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = new URLSearchParams({ num: param });

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/decretos", {
          params,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
}
