import AccordionStructure from "./AccordionStructure"
import data from "./AccordionData" 

const Accordion = () =>{
    
    return(
        <div>
        {
            data.map((item) =>{
                return <AccordionStructure key={item.id} {...item}/>
            })
        }
        </div>
    )
}

export default Accordion