import React,{useState,useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css'
// import StudentContext from '../global/StudentContext'
import { fontWeight } from '@mui/system'

const Edit = () => {
    // const studentsData = useContext(StudentContext);
    const {paramID} = useParams();

const [id, setid] = useState("");
const [mname, setName] = useState("");
const [fname, setFname] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [dob, setDob] = useState("");

   

    let mydata = JSON.parse(localStorage.getItem("StudentDetails"));
    // console.log(mydata);
    let dataToEdit = mydata.filter(obj => obj.id === paramID)
    console.log(dataToEdit);

  
    function handleSubmit(e){

        e.preventDefault();
        if(email.indexOf("@")<1 || email.lastIndexOf(".")<(email.indexOf("@")<1)+2||(email.lastIndexOf("."))+2>=email.length){
            alert("invalid email");
          } 
          else if(email.length<5||email.length>25){
            alert("length can not be < 5 or > 25");
          }
          else if(phone.length!=11){
            alert("length should be 11 digits")
          }
          else if(fname.length<3||fname.length>20){
            alert("length can not be < 3 or > 20")
          }
          else if(id.length>7){
            alert("length should be < 7")
          }
          else if(!id&&!mname&&!fname&&!phone&&!email&&!dob){
           
            alert("Please Insert data first!")
          }
        else if(!id||!mname||!fname||!phone||!email||!dob){
           
            alert("Please Renter All values!")
          }
        else{

        const data = {id,mname,fname,phone,email,dob};
        let studentDetails = JSON.parse(localStorage.getItem("StudentDetails"))
     
        studentDetails.push(data);
        localStorage.setItem("StudentDetails",JSON.stringify(studentDetails));
      
        if(id&&mname&&fname&&phone&&email&&dob){
           
            setid("");
            setName("");
            setFname("");
            setPhone("");
            setEmail("");
            setDob("");
          
        }
        let k=studentDetails.filter(obj => obj.id !== id);
        localStorage.setItem("StudentDetails", JSON.stringify(k)); 
    }
   
}
    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Student Details</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" novalidate >

                                     <div className="col-md-12">
                                        <input className="form-control" type="number" name="id" placeholder="Roll No" style={{color:"black", fontWeight:"bold"}}
                                        defaultValue={dataToEdit[0].id}  
                                        
                                        onChange={(e)=>{setid(e.target.value)}} 
                                        required />
                             
                                    </div>

                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="mname" placeholder="Name" style={{color:"black", fontWeight:"bold"}}
                                        defaultValue={dataToEdit[0].mname}
                                        onChange={(e)=>{setName(e.target.value)}} 
                                          required />
                                     
                                    </div>
                                    <div className="fname col-md-12" id='fathername'>
                                        <input className="form-control" type="text" name="fname" placeholder="Father's Name"  style={{color:"black", fontWeight:"bold"}}
                                        defaultValue={dataToEdit[0].fname}
                                        onChange={(e)=>{setFname(e.target.value)}}
                                         required />
                         
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="phone" placeholder="Phone" style={{color:"black", fontWeight:"bold"}}
                                        defaultValue={dataToEdit[0].phone}
                                        onChange={(e)=>{setPhone(e.target.value)}} 
                                         required />
                                
                                    </div>
                                    <div className="col-md-12 mb-14" id='myemail'>
                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" style={{color:"black", fontWeight:"bold"}}
                                        defaultValue={dataToEdit[0].email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                         required />
                                  
                                    </div>
                                    <div className="col-md-12 ">
                                        <input className="form-control" type="date" name="dob" placeholder="Date Of Birth" style={{color:"black", fontWeight:"bold"}}
                                        defaultValue={dataToEdit[0].dob}
                                        onChange={(e)=>{setDob(e.target.value)}}
                                        required />
                              
                                    </div>

                                    <div className="form-button mt-3">
                                        <Link to="/" ><button id="cancel" type="" className="btn btn-danger w-25" style={{marginRight:"225px"}}>Cancel</button></Link>
                                        <Link to="/" ><button id="save" type="submit" className="btn btn-success w-25" onClick={handleSubmit}  >Update</button></Link>
                                    </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
    
</>
    )
}

export default Edit