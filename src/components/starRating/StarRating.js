import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  function handleClick(i) {
    setRating(i + 1);
  }

  function mouseEnter(i){
    setHover(i+1)
  }

  function mouseLeave(){
    setHover(null)
  }

  return (
    <div>
      {[...Array(8)].map((star, index) => {
        return (
          <FaStar
          key={index}
            size={50}
            onClick={() => {
              handleClick(index );
            }}

            onMouseEnter={()=>{mouseEnter(index)}}
            onMouseLeave={()=>{mouseLeave()}}
            color={ (rating || hover) > index ? "yellow" : "black" }
          />
        );
      })}

      <h2>Rating : {rating}</h2>
    </div>
  );
};

export default StarRating;
