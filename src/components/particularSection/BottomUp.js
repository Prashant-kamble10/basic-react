import React,{useState, useEffect} from 'react'

const BottomUp = () => {
    const[upBtn, setUpBtn] =  useState(false)

    useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 300){
            setUpBtn(true)
        }else{
            setUpBtn(false)
        }
    })
    },[])

    function ScrollUp(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
      {
        upBtn && (
            <button className='btn' onClick={ScrollUp}>Scroll to top</button>
        )
      }
    </div>
  )
}

export default BottomUp
