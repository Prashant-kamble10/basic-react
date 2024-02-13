import { useEffect, useState } from "react";
import InfiniteStructure from "./InfiniteStructure";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [api, setApi] = useState();
  const [load, setLoad] = useState(18)

  
  useEffect(() => {
  
    const data = async () => {
      const data1 = await fetch(`https://dummyjson.com/quotes?limit=${load}`);
      const json = await data1.json();
      setApi(json.quotes);
    };
  
    data();
  }, [load]);


  function loadMore(){
        setLoad((prev) => prev + 18)
  }

  return (
    <>
      <div className="card-container">
          {api && api.map((apiData, index) => {
            return <div className="card" key={apiData.id} ><InfiniteStructure {...apiData} /></div>;
          })}
      </div>
      <div>
        <button className="load-more" onClick={loadMore}>Load more Quotes</button>
      </div>
    </>
  );
};

export default InfiniteScroll;
