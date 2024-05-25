import "./TicTac.css";
import Square from "./Square"
import {useState} from "react";

const TicTac = () =>{
    const [state, setState] = useState(Array(9).fill(null))
    // console.log('state: ', state);
    const [turn, setTurn] = useState(true)

    const checkWinner = () =>{
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(const logic of winner){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a]===state[b] && state[a] === state[c]){
                return `${state[a] + " " + "Won"}`
            }
        }

        if(state.find((element)=> element == null) !== null) return "Match Drawn";

        return false;

    }

    const declareWinner = checkWinner();

    function handleCLick(index){
//    console.log(num)
        const copyState = [...state]
        // console.log('copyState: ', copyState);
         copyState[index] = turn ? "X" : "O";
         setState(copyState)
         setTurn(!turn) 
    }

    function handleReset(){
        setState(Array(9).fill(null));
        setTurn("X")
    }

    return(
        <>
        <div className="board">

           {
            declareWinner ? (
               <div className="header">
                   <h4>{declareWinner}</h4>
                <button onClick={handleReset}>Play Again</button>
               </div>
              
               
            ) : (
               <>
               <h4 className="header">player {turn ? "X": "O"}, Your Move</h4>
                <div className="row">
                <Square onClick={()=>handleCLick(0)} value={state[0]}/>
                <Square onClick={()=>handleCLick(1)} value={state[1]}/>
                <Square onClick={()=>handleCLick(2)} value={state[2]}/>
              </div>
              <div className="row">
                <Square  onClick={()=>handleCLick(3)} value={state[3]}/>
                <Square  onClick={()=>handleCLick(4)} value={state[4]}/>
                <Square  onClick={()=>handleCLick(5)} value={state[5]}/>
              </div>
              <div className="row">
                <Square  onClick={()=>handleCLick(6)} value={state[6]}/>
                <Square  onClick={()=>handleCLick(7)} value={state[7]}/>
                <Square  onClick={()=>handleCLick(8)} value={state[8]}/>
              </div>
               </>
            )
           }
        </div>
        </>
    )
}

export default TicTac