// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//export default App;

import { useState } from "react";
const App=()=>{
  const [val, setVal]=useState("");
  const cal=()=>{
    let val=Math.random()*100;
    alert (val+"  Loading ...!!! Love");
    setVal(val);
  }
  return (
<div style={{color:"white",backgroundColor:"red",paddingBottom:"60px"}}>
<center><h1><b>Love &hearts; Calculator  </b></h1>
<p1>Get Your Own Love Result Instantly &hearts;</p1>
</center>

<br></br>
<br></br>
<center>*Your Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*His/Her Name :</center>
<center><input type="text" placeholder="enter your name"style={{backgroundColor:"pink",borderRadius:"50px"}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input type="text" placeholder="enter his/her name" style={{backgroundColor:"pink",borderRadius:"50px"}}/> </center> 
<br></br>  
<br></br>
<center><button style={{color:"red",backgroundColor:"white" ,borderRadius:"50px"}}onClick={cal}type="Submit">&hearts;Calculate&hearts;</button></center>
<br></br>
<center><h2>Result  : {val}</h2></center>
<hr></hr>
</div>


  )
}
export default App;