import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    resetCounter,
  } from "../services/actions/counterAction";

const Counter = () => {
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
            <h3>Counter </h3>
            <h4>Count : {count}</h4>
            <button className='btn btn-success m-2' onClick={handleIncrement}>+</button>
            <button className='btn btn-warning m-2 ' onClick={handleReset}>Reset</button>
            <button className='btn btn-danger m-2' onClick={handleDecrement}>-</button>
          </div>  
        </div>
    );
};

export default Counter;