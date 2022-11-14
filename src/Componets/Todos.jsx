import React from "react";
import { useParams } from "react-router-dom";


const  Todos=()=>{
const id =useParams();
return(

    <h1>`THIS IS A TODO COMPONENT and todo id is ${id} ` </h1>
)

}
export default Todos;