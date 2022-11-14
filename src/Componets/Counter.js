import React, { useEffect, useState } from "react";


const Counter =()=>{

    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0); 

    useEffect(() => {
        console.log("the use effect ran")

return()=>{

console.log(`the count has been updated: ${count} ${count1}`)


}

    }, [count , count1]);




return(
<div>
<h1>Counter</h1>
<p>Current count: {count}   {count1} </p>
        <button onClick={() => setcount(count + 1)}>Increment the count</button>
        <button onClick={() => setcount1(count1 + 1)}>Increment the count2</button>


</div>



)






}






export default Counter;




