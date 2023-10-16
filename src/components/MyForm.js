import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const MyForm = () => {

const [id, setid] = useState("");
const [mname, setName] = useState("");
const [fname, setFname] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [dob, setDob] = useState("");


  

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
        alert("Please fill all fields!")
      }
      else{
    const data = {id,mname,fname,phone,email,dob};
    let studentDetails = JSON.parse(localStorage.getItem("StudentDetails"))
    console.log(data);
    studentDetails.push(data);
    localStorage.setItem("StudentDetails",JSON.stringify(studentDetails));
    console.log(studentDetails);
    if(id&&mname&&fname&&phone&&email&&dob){
       
        setid("");
        setName("");
        setFname("");
        setPhone("");
        setEmail("");
        setDob("");
    }
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
                                        <input className="form-control" type="number" name="roll" id='roll_Input' placeholder="Roll No" value={id} onChange={(e)=>{setid(e.target.value)}} required />
                                    </div>
                                    <div id="msg1" class="msg"></div>

                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="name" id='name_Input' placeholder="Name" value={mname} onChange={(e)=>{setName(e.target.value)}} required />
                                    </div>
                                    <div id="msg2" class="msg"></div>
                                    <div className="fname col-md-12" id='fathername'>
                                        <input className="form-control" type="text" name="fname" id='fname_Input' placeholder="Father's Name" value={fname} onChange={(e)=>{setFname(e.target.value)}}  required />
                                    </div>
                                    <div id="msg3" class="msg"></div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="phone" id='phone_Input' placeholder="Phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
                                    </div>
                                    <div id="msg4" class="msg"></div>
                                    <div className="col-md-12 mb-14" id='myemail'>
                                        <input className="form-control" type="email" name="email" id='email_Input' placeholder="E-mail Address" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                                 
                                    </div>
                                    <div id="msg5" class="msg"></div>
                                    <div className="col-md-12 ">
                                        <input className="form-control" type="date" name="dob" id='dob_Input' placeholder="Date Of Birth" value={dob} onChange={(e)=>{setDob(e.target.value)}}  required />
                                    </div>
                                    <div id="msg6" class="msg"></div>

                                    <div className="form-button mt-3">
                                        <Link to="/" ><button id="cancel" type="" className="btn btn-danger w-25" style={{marginRight:"225px"}}>Cancel</button></Link>
                                        <Link to="/" ><button id="save" type="submit" className="btn btn-success w-25" onClick={handleSubmit} >Save</button></Link>
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

export default MyForm
