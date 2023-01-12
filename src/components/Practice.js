import React from 'react'
import { useState } from 'react';
const Practice = () => {
    let inputVal;
    const [first, setfirst] = useState("");
    let arr = [];
    
    
    return (
        <div>
        <input onChange={(e)=>{
            inputVal= e.target.value
            setfirst(inputVal);
        }} style={{padding: 20, border:"5px solid red"}} type="text" placeholder='enter something' />
        <button onClick={()=>{
            setfirst(()=>{
                arr.push(first);
            
            })
        }} style={{padding:20}}>sumbit</button>
        <h1>{first}</h1>
        <p>{arr}</p>
        

        
    </div>
  )
}

export default Practice