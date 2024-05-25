import "./TicTac.css";

const Square = (props) => {
  return <>
       <div className="box" onClick={props.onClick}>
             <h2>{props.value}</h2>
       </div>
  </>;
};

export default Square;
