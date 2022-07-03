import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    resetCounter,
  } from "../services/actions/counterAction";

const Counter1 = () => {
    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter());
      };

      const handleReset = () => {
        dispatch(resetCounter());
      };

      const handleDecrement = () => {
        dispatch(decrementCounter());
      };  
    return (
        <div className='card container mt-5'>
           <div className='card-body'>
            <h1>Counter 1</h1>
            <h2>Count : {count}</h2>
            <button className='btn btn-success m-2' onClick={handleIncrement}>+</button>
            <button className='btn btn-warning m-2 ' onClick={handleReset}>Reset</button>
            <button className='btn btn-danger m-2' onClick={handleDecrement}>-</button>
          </div>  
        </div>
    );
};

export default Counter1;