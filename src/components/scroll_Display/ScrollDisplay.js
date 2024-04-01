import "./ScrollDisplay.css";
import React, { useEffect, useState } from "react";

const ScrollDisplay = () => {
  const [list, setList] = useState([]);
  const [scrollPercentage, setScrollPercenteage] = useState(0)

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=80");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setList(data.products);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    fetchData();

    window.addEventListener('scroll', onScroll)

    return ()=> window.removeEventListener('scroll', onScroll)
  }, []);

const onScroll = () =>{

    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scroll / height) * 100;

    setScrollPercenteage(scrolled)
}
  


  return (
    <>
      <div className="scroll_nav">9. Scroll Indicator
      <div className="indicator" style={{width: `${scrollPercentage}%`}}>
       
      </div>
      </div>
      <div className="content-list">
        {list && list.length> 0 ? list.map((data) => {
          return <React.Fragment key={data.id}>
            <p ><span>{data.id}</span>. {data?.title}</p>
          </React.Fragment>
        }) : null}
      </div>
    </>
  );
};

export default ScrollDisplay;
