import "./ProfileFinder.css";
import CardProfile from "./CardProfile";
import { useState, useEffect } from "react";

const ProfileFinder = () => {
  const [userName, setUserName] = useState("Prashant-kamble10");
  const [clicked, setClicked] = useState("Prashant-kamble10");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleClick() {
    setClicked(userName);
  }

  useEffect(() => {
    fetchData();
  }, [clicked]);

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${clicked}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const fetchedData = await response.json();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <div>
          <div>
            <input
              type="text"
              placeholder="enter github profile name"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
        {data?.login}
        {data?.url}
        {data?.id}
        {data?.vatar_url}
        <CardProfile user={data} />
      </div>
    </>
  );
};

export default ProfileFinder;
