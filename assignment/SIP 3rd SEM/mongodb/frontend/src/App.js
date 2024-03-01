import React ,{useState} from 'react'
import Axios from "axios"

const App=()=>{
  const[data,setbdata]=useState({Title:"",Content:"",Author:""});
  const changeHandler=(e)=>{
    let name1=e.target.name
    let val=e.target.value
    setbdata({...data,[name1]:val});
  };

  const submitHandler=()=>{
    Axios.post("http://localhost:5000/insert",{data});
    alert("data inserted");
  };
  return(
    <>
    <h1>Blogging Site</h1>
    <hr />
    <form onSubmit={submitHandler}>
      <label>Title:</label>
      <input type="text"  name="Title"  value={data.Title} onChange={changeHandler} />
      <br /> <br />
       <label>Content:</label>
       <input type="text" name="Content" value={data.Content} onChange={changeHandler}/>
       <br /> <br />
       <label>Author:</label>
      <input type="text" name="Author" value={data.Author} onChange={changeHandler} />
      <br /> <br />
<button type="submit">insert</button>

  </form>
  </>
  );
};


export default App