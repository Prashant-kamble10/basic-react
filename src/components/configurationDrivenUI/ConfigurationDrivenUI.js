import { useContext } from "react";
import  BoxPopup from "../boxPopup/BoxPopup";
import DarkModeIndex from "../darkMode/DarkModeIndex";
import RandomColor from "../randomColor/RandomColor";
import StarRating from "../starRating/StarRating";
import TabChange from "../tabChange/TabChange";
import {ConfigDrivenContext} from "./context/Index";

const ConfigurationDrivenUI = ()=>{

    const { loading, enabledFlags } = useContext(ConfigDrivenContext);

const componentsToRender = [
    {
        key : "showBoxPopUp",
        component :  <BoxPopup />
    },{
        key :   "showDarkMode"  ,
        component :  <DarkModeIndex />
    },{
        key :   "showRandomColor"  ,
        component :   < RandomColor />
    },{
        key :   "showStarRating"  ,
        component :  < StarRating/>
    },{
        key :  "showTabChange"   ,
        component :   <TabChange />
    }
]

function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <h1>Loading data ! Please wait</h1>;
    return(
        <>
        <h4>Feature flags</h4>
        {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
        </>
    )
}

export default ConfigurationDrivenUI

// import { useContext } from "react";
// import BoxPopup from "../boxPopup/BoxPopup";
// import DarkModeIndex from "../darkMode/DarkModeIndex";
// import RandomColor from "../randomColor/RandomColor";
// import StarRating from "../starRating/StarRating";
// import TabChange from "../tabChange/TabChange";
// import { ConfigDrivenContext } from "./context/Index";

// const ConfigurationDrivenUI = () => {
//   const { loading, enabledFlags } = useContext(ConfigDrivenContext);

//   const componentsToRender = [
//     { key: "showBoxPopUp", component: <BoxPopup /> },
//     { key: "showDarkMode", component: <DarkModeIndex /> },
//     { key: "showRandomColor", component: <RandomColor /> },
//     { key: "showStarRating", component: <StarRating /> },
//     { key: "showTabChange", component: <TabChange /> },
//   ];

//   function checkEnabledFlags(getCurrentKey) {
//     return enabledFlags[getCurrentKey];
//   }

//   if (loading) return <h1>Loading data! Please wait</h1>;

//   return (
//     <>
//       <h4>Feature flags</h4>
//       {componentsToRender.map((componentItem) =>
//         checkEnabledFlags(componentItem.key) ? componentItem.component : null
//       )}
//     </>
//   );
// };

// export default ConfigurationDrivenUI;
