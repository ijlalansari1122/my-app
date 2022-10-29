import React, { useEffect, useState } from "react";


const Counter =()=>{

    const [count, setcount] = useState(0);

    useEffect(() => {
console.log("The component has mounted")       

return()=>{


console.log("The component has unmounted")

}


    },[]);

return(
<div>
<h5>Counter</h5>
<p>Current count: {count}</p>
<button onClick={()=>setcount(count+1)}>Increment the count</button>


</div>



)






}






export default Counter;




