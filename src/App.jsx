import React from 'react'
import { useState } from 'react';
import {validation,validateEmail,validateName,validatePassword,validateNumber} from './validation';
import './App.css'; 
function App() {
  const [values,setValues]=useState({
    name:"",
    email:'',
    password:'',
    number:''
  })
const[errors,setErrors]=useState({});

const [errorName,setErrorName]=useState("")
const [errorEmail,setErrorEmail]=useState("")
const [errorPassword,setErrorPassword]=useState("")
const [errorNumber,setErrorNumber]=useState("")

const handleName=(e)=>{
  setErrorName(validateName(e))
  setValues({...values,name:e.target.value})
}
const handleEmail=(e)=>{
  setErrorEmail(validateEmail(e));  
  setValues({...values,email:e.target.value})
}
const handlePassword=(e)=>{
  setErrorPassword(validatePassword(e));
  setValues({...values,password:e.target.value})
}
const handleNumber=(e)=>{
  setErrorNumber(validateNumber(e));
  setValues({...values,number:e.target.value})
}

const handleValidation=(e)=>{
  e.preventDefault();
  console.log(values);
  setErrors(validation(values));
 }
 const validate = () => {
  return  values.name.length &&  values.email.length &&  values.password.length &&  values.number.length && 
          errors;
        };
        
  return (
    <div className="container">
      <form onSubmit={handleValidation}>
      <h1> Form Validation</h1>
      <div>
      <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" name="name" placeholder="Enter Name" onChange={handleName}/>
      {!!errorName && <p style={{color:"red"}}>{errorName}</p>}
      </div>
      <br/>
      <div>
      <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="email" name="email" placeholder="Enter Email" onChange={handleEmail}/>
      {!!errorEmail && <p style={{color:"red"}}>{errorEmail}</p>}
      </div>
      <br/>
      <div>
      <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="password" name="password" placeholder="Password"  onChange={handlePassword}/>
      {!!errorPassword && <p style={{color:"red"}}>{errorPassword}</p>}
      </div>
      <br/>
      <div>
      <label>Number</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="number" name="number" placeholder="Mobile Number"  onChange={handleNumber}/>
      {!!errorNumber && <p style={{color:"red"}}>{errorNumber}</p>}
      </div>
      <br/><br/>
      <div class="last">
      <button type="submit" disabled={!validate()}>save</button>
      </div>
      </form>
    </div>
  );
}
export default App;
