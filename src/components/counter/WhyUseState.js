import React,{useState} from 'react'

const WhyUseState = () => {

    let sample =1;   // with normal JS variable
    const [state, setState] = useState(0)   // with state variable


  return (
    <div>
      <h2>with Normal Variable</h2> 
      <button onClick={()=>{console.log(sample++)}}></button>
      {sample}



      <h2>with State Variable</h2>
      <button onClick={()=>{setState(state+1)}}></button>
      {state}
      {console.log("state", state)}
    </div>
  )
}

export default WhyUseState
