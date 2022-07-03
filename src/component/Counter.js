import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    resetCounter,
  } from "./services/actions/counterAction";

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
        <div>
            
        </div>
    );
};

export default Counter;