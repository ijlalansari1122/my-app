import React, { useState } from "react";
import './App.css'



const App = () => {
// using state

    const [Loggedin , setlogin] =useState(false);
  

return (
        <div className="App" >
<h1>welcome to the app</h1>
    <button onClick={() => setlogin(!Loggedin)} > 

    {Loggedin ? "log out" : "log in"}
    </button>

{/* using conditional rendering */}

{
Loggedin ? (<h1>hello </h1>)
:
(

  <h2>please login to continue</h2>

)
}


</div>








    );


}
export default App;