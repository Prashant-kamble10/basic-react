import "./InfiniteScroll.css";


const InfiniteStructure = ({id, quote, author}) =>{
     

    return(
        <>
    
         <h5>"Quote:" {id}</h5>
        <h4>Quote:" {quote}</h4>
       <h2 className="author">{author}</h2>
   
      
        </>
    )
}

export default InfiniteStructure