import React, { useRef, useState } from 'react'
import './CRUD.css'
function CRUD() {
const list = [
{
usn: 1,
name: "surabhi",
college: "scem",
email: "ss@gmail.com"
},
{
usn:2,
name: "rakshi",
college: "scem",
email: "rpm@gmail.com"
},
]
const [lists, setList] = useState(list)
const [updateState, setUpdateState] = useState(-1)
return(
<div className='crud'>
<div>
<AddList setList = {setList }/>
<form onSubmit={handleSubmit}>
<table>
<tr>
<h4>NAME <t> USN </t> COLLEGE EMAIL</h4>
</tr>
{
lists.map((current) => (
updateState === current.usn ? <EditList
current={current} lists={lists} setList={setList}/> :
<tr>
<td>{current.name}</td>
<td>{current.usn}</td>
<td>{current.college}</td>
<td>{current.email}</td>
<td>
<button className='edit' onClick={() =>
handleEdit(current.usn)}>Edit</button>
<button className='delete' type='button'
onClick={() => handleDelete(current.usn)}>Delete</button>
</td>
</tr>
))
}
</table>
</form>
</div>
</div>
)
function handleEdit(usn) {
setUpdateState(usn)
}
function handleDelete(usn) {
const newlist = lists.filter((li) => li.usn !== usn)
setList(newlist)
}
function handleSubmit(event) {
event.preventDefault()
const name = event.target.elements.name.value
const college = event.target.elements.college.value
const usn = event.target.elements.usn.value
const email = event.target.elements.email.value
const newlist = lists.map((li) => (
li.usn === updateState ? {...li, name:name, price: college} : li
))
setList(newlist)
setUpdateState(-1)
}
}
function EditList({current, lists, setList}) {
function handInputname(event) {
const value = event.target.value;
const newlist = lists.map((li) => (
li.usn === current.usn ? {...li, name :value} : li
))
setList(newlist)
}
function handInputprice(event) {
const value = event.target.value;
const newlist = lists.map((li) => (
li.usn === current.usn ? {...li, college :value} : li
))
setList(newlist)
}
return(
<tr>
<td><input type="text" onChange={handInputname} name='name'
value={current.name}/></td>
<br></br>
<td><input type="text" onChange={handInputprice} usn='usn'
value={current.usn}/></td>
<td><input type="text" onChange={handInputprice} college='college'
value={current.college}/></td>
<td><input type="text" onChange={handInputprice} email='email'
value={current.email}/></td>
<td><button type='submit'>Update</button></td>
</tr>
)
}
function AddList({setList}) {
const nameRef = useRef()
const collegeRef = useRef()
const emailRef = useRef()
const usnRef = useRef()
function handleSubmit(event) {
event.preventDefault();
const name = event.target.elements.name.value;
const usn = event.target.elements.usn.value;
const email = event.target.elements.email.value;
const college = event.target.elements.college.value;
const newlist = {
usn: 153,
name,
college,
name
}
setList((prevList)=> {
return prevList.concat(newlist)
})
nameRef.current.value = ""
collegeRef.current.value = ""
}
return(
<form className='addForm' onSubmit={handleSubmit}>
<input type="text" name="name" placeholder="Enter Name"
ref={nameRef}/>
<br></br>
<input type="text" name="usn" placeholder="Enter USN"
ref={usnRef}/>
<br></br>
<input type="text" name="email" placeholder="Enter Email"
ref={emailRef}/>
<br></br>
<input type="text" name="college" placeholder="Enter College"
ref={collegeRef}/>
<br></br>
<button type="submit">Add</button>
</form>
)
}
export default CRUD;