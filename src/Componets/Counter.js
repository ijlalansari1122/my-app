import React, { useEffect, useState } from "react";


const Counter =()=>{

const[count , setcount]= useState(0);
    // component did mount

    // useEffect(() => {
    //     console.log("the use effect ran")



    // }, []);
    // componentDidupdate

    useEffect(() => {
        console.log("the use effect ran")



    }, []);

return(
<div>
<h5>Counter</h5>
<p>Current count: {count}</p>
<button onClick={()=>setcount(count+1)}>Increment the count</button>


</div>



)






}











