import React, { useState } from 'react'
import './CSS/loginSignup.css'
export const LoginSignup = () => {
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })
  const handleClick = (e)=>{
      {if(state==="Login"){
          setState("Sign up")
      }else{
         setState("Login")
      }}
  }
  const changeHandle = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async () =>{
    console.log("Login executed")
    console.log(formData)
    let dataObj;
    await fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json', 
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json())
    .then((data)=>{dataObj = data})
    .catch((err)=>{
      console.log("Error to login")
      console.log(err)
    })
    if(dataObj.success){
      localStorage.setItem('auth-token',dataObj.token)
      window.location.replace('/')
    }else{
      alert(dataObj.errors)
    }
  }
  const signUp = async () => {
    let dataObj;
    await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }
  return (
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state==="Sign up"?<input type="text" placeholder='Your Name' name="name" value={formData.name} onChange={changeHandle}/>:<></>}
            <input type="email" placeholder='Email Address' name="email" value={formData.email} onChange={changeHandle}/>
            <input type="password" placeholder='Password' name="password" value={formData.password} onChange={changeHandle}/>
          </div>
          <button onClick={state==="Login"?login:signUp}>Continue</button>
          {state==="Sign up"?
            <p className="loginsignup-login">
              Already have an account? <span onClick={handleClick}>Login</span>
            </p>:
            <p className="loginsignup-login">
              Create an account?<span onClick={handleClick}>Click here</span>
            </p>
          }
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        </div>
      </div>
  )
}
