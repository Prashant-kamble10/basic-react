import { useState } from "react"
import "./RandomColor.css"

const RandomColor = () =>{
   const[hex, setHex] = useState("#000000")
   const[rgb, setRgb] = useState("rgb(0,0,0)")


function changeHEX(){
let arr = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
let op = ""
for (let i = 0; i < 6 ; i++ ){
  op  += arr[Math.floor(( Math.random() * arr.length))]
}
let final = "#"+op
setHex(final)
}

function changeRGB(num){
   let R = Math.floor(Math.random() * num)
   let G = Math.floor(Math.random() * num)
   let B = Math.floor(Math.random() * num)
   setRgb(`rgb(${R},${G},${B})`)
}

 return(
   <>
    <div>
      <button onClick={changeHEX}>Random Hex color </button>
      <button onClick={()=> changeRGB(256)}>Random RGB color </button>
      <button  onClick={()=> {
        changeHEX()
        changeRGB(256)
      }}>Random color </button>

    </div>
    
    <div className="color-change1" style={{backgroundColor: hex}}>1</div>
    <div className="color-change2" style={{backgroundColor: rgb}}>2</div>
   </>
 )
}


export default RandomColor