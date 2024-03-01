//import { BrowserRouter, Routes, Route } from "react-router-dom";
import CRUD from './CRUD';
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";


function App() {

	return (
		<>
    <center>
<h1>Student Details</h1>
</center>
<hr></hr>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					
				</div>
				<Routes>
					<Route exact path="/about" element={<About />} />
          <Route exact path="/CRUD" element={<CRUD />} />
					
				</Routes>
			</BrowserRouter>
		</>
	);
}



// function App() {
// return (
// <>
// <center>
// <h2>Student Details</h2>
// </center>
// <hr></hr>
// <BrowserRouter>
// <Routes>
// </Routes>
// </BrowserRouter>
// </>
// );
// }
 export default App;