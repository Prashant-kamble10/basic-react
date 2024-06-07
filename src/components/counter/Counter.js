import { useState } from 'react';
import React from 'react';
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div>
      <button className='increment' onClick={increment}>+</button>
      <span className='text'>{count}</span>
      <button className='decrement' onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;


// const increment = () => {
//     setCount(count + 1);
//   };

//   If increment is called twice in quick succession, you might expect count to increase by 2. However, if the first update hasn't completed before the second update is triggered, both updates might read the same initial value of count, resulting in an incorrect final value.


// ---------------------------------------------------------------------------------------------------------------

// const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   First Call to increment:

// prevCount is set to the current value of count.
// setCount updates the state to prevCount + 1.

// Second Call to increment:

// React ensures that prevCount is the updated state value from the first call.
// setCount updates the state to prevCount + 1 again, ensuring the increment is correct.