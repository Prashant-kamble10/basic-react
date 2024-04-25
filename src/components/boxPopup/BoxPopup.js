import { useState } from "react";
import "./BoxPopup.css";


const BoxPopup = () => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <div>
        <button  onClick={handleClick}>Modal Popup</button>

       {
        show &&  <div className="popup-box">
        <button className="x-button" onClick={handleClick}>X</button>
        <h2>This a modal popup box</h2>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          aspernatur illum iste temporibus mollitia quidem fuga soluta
          excepturi!
        </h4>
      </div>
       }
      </div>
    </>
  );
};

export default BoxPopup;



