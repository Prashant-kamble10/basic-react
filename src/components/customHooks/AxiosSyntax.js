import axios from "axios";
import { useState, useEffect } from "react";
import "./Homepage.css";

function Homepage() {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log("Error:", err);
      });
  }

  
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("data", data);
}

export default Homepage;
