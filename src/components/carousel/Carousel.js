import { CarouselData } from "./CarouselData"
import "./Carousel.css"
import { useState } from "react"



const Carousel = ()=>{
    const [slideNum, setSlideNum] = useState(0)


    function next(){
        setSlideNum(slideNum + 1)
        if(slideNum === CarouselData.length - 1){
            setSlideNum(0)
        }
    
    }

    function previous(){
        setSlideNum(slideNum - 1)
        if(slideNum === 0){
            setSlideNum(CarouselData.length - 1)
        }
    }

    
    return(
        <>
        <div className="carousel">
            <button onClick={previous}>Previous</button>
          
            <div className="slide" >
                          <img src={CarouselData[slideNum]} alt="img" />   
                    </div>
            <button onClick={next}>Next  </button>
        </div>
        </>
    )
}

export default Carousel
