import menus from "./TreeData";
import TreeStructure from "./TreeStructure";
import "./TreeMenu.css";

const TreeMenu = () => {
  return (
    <>
      {menus.map((data, index) => {
        return (
          <>
            <TreeStructure key={index} data={data}/>
          
          </>
        );
      })}
    </>
  );
};

export default TreeMenu;
