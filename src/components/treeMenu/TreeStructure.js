import { useState } from "react";
import "./TreeMenu.css";

const TreeStructure = ({ data}) => {
  const[isOpen,setIsOpen] = useState(false)
 
  function handleClick(){
    setIsOpen(!isOpen)
  }
  
  return (
    <>
     <div className="button">
     <button onClick={handleClick}>
      <h4>{ data.label} <span>+</span></h4>
      </button>
     </div>

    
      {data.children && (
        <div className={`sub-menu ${isOpen ? ' ' : "sub-menu-collapse"}`}>
          {data.children.map((subMenu, index) => {
            return <TreeStructure key={index} data={subMenu} />;
          })}
        </div>
      )}
    </>
  );
};

export default TreeStructure;
