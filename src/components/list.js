import { listClasses } from '@mui/material'
import React, {  useEffect, useState,useContext } from 'react'
import {Outlet, Link } from 'react-router-dom'
// import StudentContext from '../global/StudentContext'

import './style.css'


const List = () => {
  let All = JSON.parse(localStorage.getItem("StudentDetails"));
  const [newAll, setAll] = useState([]);
//   const [count, setCount] = useState(0);
//   const [updateState, setUpdateState] = useState(-1)
// const studentsData = useContext(StudentContext);

// useEffect(() => { setAll(All.concat(studentsData));handleDelete(); console.log("UseEffect")},[count]);

useEffect(()=>{
  setAll(All)
})
let users = localStorage.getItem("StudentDetails")

if(!users){
  localStorage.setItem("StudentDetails",JSON.stringify([{  "id":1,
  "mname":"aqeel",
  "fname":"hanif",
  "phone":1234455,
  "email":"aqeel@gmail.com",
  "dob":"10/12/2000"}]))

}


 function handleDelete(id) {
  let k=All.filter(obj => obj.id !== id);
 localStorage.setItem("StudentDetails", JSON.stringify(k)); 
 
//  setAll(All.filter(obj => obj.id !== id))
}






// function handleDelete(id){

//   localStorage.setItem("keyName", JSON.stringify(All.filter(obj => obj.id !== id)));
// }


  return (

    <div className='list'>
    <div className='Heading'><h1>WP Assignment-02</h1>
    
    <div className='Add-btn'><Link to='form'><button>ADD</button></Link></div> 
    </div>
    <div className='details'><h1>Details</h1></div>  
    <table className="table table-bordered text-dark">
    <thead >
      <tr>
    
        <th><h4>SNO</h4></th>
        <th><h4>Roll No</h4></th>
        <th><h4>Name</h4></th>
        <th><h4>Fname</h4></th>
        <th><h4>Phone</h4></th>
        <th><h4>Email</h4></th>
        <th><h4>DOB</h4></th>
        <th><h4>Actions</h4></th>
      </tr>
    </thead>

    <tbody>
    {

      All.map((element,i)=>{
        return(
      <tr key={i}>
        <td>{i+1}</td>
        <td>{element.id}</td>
        <td>{element.mname}</td>
        <td>{element.fname}</td>
        <td>{element.phone}</td>
        <td>{element.email}</td>
        <td>{element.dob}</td>
        <td><Link to={'edit/'+element.id} >edit </Link>
        |<Link to="/" onClick={()=>handleDelete(element.id)}>delete</Link></td>
      </tr>
        )
    })
  }
    </tbody>
  </table>
  <Outlet/>
    </div>
  )
}

export default List

