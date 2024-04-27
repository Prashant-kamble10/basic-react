import "./ProfileFinder.css";
import CardProfile from "./CardProfile";
import { useState, useEffect } from "react";

const ProfileFinder = () => {
  const [userName, setUserName] = useState("prashant-kamble10");
  const [clicked, setClicked] = useState("prashant-kamble10");
 
  const [data, setData] = useState({});
 

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${clicked}`);
      console.log('clicked: ', clicked);
     

      const fetchedData = await response.json();
      console.log('fetchedData: ', fetchedData);
      setData(fetchedData);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  }

  
  useEffect(() => {
    fetchData();
  }, [clicked]);

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleClick() {
    setClicked(userName);
  }


 

  

  return (
    <>
      <div>
        <div>
          <div>
            <input
              type="text"
              placeholder="enter github profile name"
              onChange={handleChange}
              value={userName}
             
            />
          </div>
          <div>
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
        <CardProfile user={data} />
      </div>
    </>
  );
};

export default ProfileFinder;
