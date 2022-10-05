import React , {useState} from "react";




const employee={

id:'abc',
name:'anito',
salary:'$23',
address:{
salary: '$100',
street: "sasas",
country: "canada",
province: "uinas"
,
zones:{

plant:'4e',


}
}
}


 const App = () => {

// using destructuring in place
    const {name , id , salary,  address:{salary:addresssalary , street,country,province, zones:{plant}}} =employee;



    return (
        <div>
<p>
</p>

<h1>Hello world</h1> 
<h2>{name}, {id}, {salary} , </h2>
<h3>{country} , {province } , {street} , {addresssalary}</h3>

<h3>{plant}</h3>
  </div>


    )


}
export default App;