import React, { useEffect, useState } from "react";


const Counter =()=>{

    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0);

    // useEffect(() => {
    //     console.log("the use effect ran")
    // }, [count , count1]);

// component did unmount
useEffect(()=>{

        console.log("the count has updated")
// cleanup function
        return()=>{

console.log(`we are in the cleanup -the count is ${count} `);

}

}, [count])




return(
<div>
<h5>Counter</h5>
<p>Current count: {count}   {count1} </p>
        <button onClick={() => setcount(count + 1)}>Increment the count</button>
        <button onClick={() => setcount1(count1 + 1)}>Increment the count2</button>


</div>



)






}






export default Counter;




