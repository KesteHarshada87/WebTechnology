//state

import { useState } from "react";

function counter(){
    const[count, setCount] = useState(0);//start count from 0
    const[rcount, setRCount] = useState(20);
    return(
        <>
        <h2>Count: [count]</h2>
        <button onClick={()=> setCount(count+1)} Increase></button>
        <button onClick={()=> setCount(count-1)} Increase></button>
        </>
    );
}

export default counter;