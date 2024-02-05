import "./Accordion.css"
import {useState} from "react"

const AccordionStructure = (props) =>{
    const {question, answer} = props
     
    const [expand, setExpand] = useState()


    function handleClick(){
        setExpand(!expand)
    }

    return(
        <div className="accordion">
          <div className="accordion-item">
            <div onClick={handleClick} className="accordion-title">
                 {question}  <span>+</span>
            </div>
            <div className="accordion-content">
              {expand ?   <div style={{padding: "20px"}}>{answer} </div>: null}
            </div>
            </div>      
        </div>
    )
}

export default AccordionStructure