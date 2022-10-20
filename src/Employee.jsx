import React  from "react";


// using props;

const Employee=(props)=>{


    const {name , id}= props;

return(

    <div>

        <h4>Name:{name} ID: {id}</h4>
        

    </div>


    
)



}

export default Employee;