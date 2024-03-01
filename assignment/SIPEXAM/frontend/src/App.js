import React, { useState } from 'react';
import Axios from "axios";
const App = () => {
  const [data, setdata] = useState({ Title: "", Content: "", Autho: "" });
  //Change handler
  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setdata({ ...data, [name1]: val });
  };
  //submit handler.............
  const submitHandler = () => {
    Axios.post("http://localhost:4000/ins", { data });
    alert("Database inserted")
  }
  return (
    <>

      <form onSubmit={submitHandler}>
        <p id="main">
        <center><h3 id="main1">Student Card Application</h3></center>
        
          
          <center><div class="container">
           <label>Name:</label>
            <input  type="text" name="Name" 
            value={data.Name}
             onChange={changeHandler} />
            <br />
            <label>Class:</label>
            <input  type="text" name="Name:-" value={data.Class} onChange={changeHandler} />
            <br />
            <label>Rollno:</label>
            <input type="text" name="Place:-"value={data.Rollno} onChange={changeHandler} />
            <br />
            <br/>
           <center><button type="Pic Link:-"class="Submit">Submit</button></center>
          
            </div></center>
            </p>
        
               </form>
               

    </>

  );
};
export default App