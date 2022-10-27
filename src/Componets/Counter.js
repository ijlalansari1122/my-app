import React, { useEffect, useState } from "react";


const Counter =()=>{

    const [count, setcount] = useState(0);
const[count2 , setcount2]= useState(0);
    // component did mount

    // useEffect(() => {
    //     console.log("the use effect ran")



    // }, []);
    //     // componentwillupdate

    useEffect(() => {
        console.log("the component has been updated")

        return () => {

            console.log(`we are in the cleanup - the count is ${count} `)

        }

    }, [count]);

return(
<div>
<h5>Counter</h5>
<p>Current count: {count}</p>
<button onClick={()=>setcount(count+1)}>Increment the count</button>
<button onClick={() => setcount2(count2 + 1)}>Increment the count2</button>


</div>



)






}






export default Counter;




