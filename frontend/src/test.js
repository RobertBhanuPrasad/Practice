import React from 'react';
import {useState} from 'react';

function Test(){
    const [count, setCount]=useState(4);
    const [theme, setTheme]=useState('blue');
    const decrement=()=>{
        setCount(prev=>prev-1);
        setCount(prev=>prev-1);
        setTheme('yellow');
    }
    const increment=()=>{
        setCount(count+1);
        setTheme('res');
    }
    return(
        <>
        <h1>Hello World!</h1>
        <button onClick={decrement}>-</button>
        <button>{count}</button>
        <span>{theme}</span>
        <button onClick={increment}>+</button>
    </>
    )
}
export default Test;
