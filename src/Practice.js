import React, {useState,useEffect} from "react";

export default function Practice(){
    const [start, setStart]= useState(0);

useEffect(()=>{
    document.title = `You have clicked me ${start} times`;
});

    return (
        <>
        <div>
            <p>Start : {start}</p>
        <button onClick={(e)=>setStart()}>Reset</button> 
            <button onClick={(e)=> setStart(start +3)}>Increment</button>
            <button onClick={(e) => setStart(start - 3)}>Decrement</button>

        </div>
        </>
    )
}