// import React, { useEffect, useState } from "react";     
// import axios from "axios";


// const Todolist = ()=>{
// const [todos , settodos]=useState();




// useEffect(()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
//         const responsetodos = res.data;
//         settodos(responsetodos);
// })

// },[]);

// console.log(responsetodos);

// return(

// <div>

// <h1>Todolist</h1>
// {todos && todos.map(todo=>{
//     const { userId ,title ,id,completed}=todo;

// return(
// <div key={id}>
// <h1>{title}</h1>
    
//         <h6>Assigned to user: {userId}</h6>
//         <p>`The user is registered:${completed}`</p>
    
//     </div>
// )
// })}

// </div>


// )

// }
// export default Todolist;