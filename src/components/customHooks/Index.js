import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const info = await fetch(url, { ...options });
      if (!info.ok) throw new Error(info.statusText);

      const response = await info.json();
      setData(response);
      setError(null);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(`${e}. Some Error Occured `);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return{data, error, loading}
};

export default useFetch;


