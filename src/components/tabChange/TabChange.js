import "./TabChange.css";
import Tab1Component from "./Tab1Component";
import Tab2Component from "./Tab2Component";
import Tab3Component from "./Tab3Component";
import { useState } from "react";


const TabChange = () =>{

    const [activeComponent, setActiveComponent] = useState('null')


    return(
        <>
             <button className="tab-btn" onClick={()=> setActiveComponent('component 1')}>Tab 1</button>
             <button className="tab-btn" onClick={()=> setActiveComponent('component 2')}>Tab 2</button>
             <button className="tab-btn" onClick={()=> setActiveComponent('component 3')}> Tab 3</button>

            <div>
              {activeComponent === 'component 1' ? <Tab1Component /> : null }
              {activeComponent === 'component 2' ? <Tab2Component /> : null }
              {activeComponent === 'component 3' ? <Tab3Component /> : null }
            </div>
        </>
    )
}

export default TabChange


