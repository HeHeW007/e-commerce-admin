"use client";

import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser , faEnvelope , faLock} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();

  return (
    <div className='sign-cont'>

      {/*left side*/}
      <div className="sign-intro">
        <p>Welcome to <br /> <span>Nexa</span><span style={{color: "#ffeb3b"}}>Cart ! </span> <br /></p>
        <p id='introtext'>Your Next-Gen commerce manager</p>
        {/*navigate to login on button click*/}
        <div className='login-cont'>
          <button className='login-btn' onClick={()=> navigate("/login")}>Login</button>
        </div>
      </div> 

      {/*right side*/}
      <div className='sign-content'>
        <h3>Sign Up</h3>
        <form className='addUserForm'>
          <div className="inputGroup">
          <div className="label-div">
            <input 
            type="text" 
            name="username"
            placeholder="Username "
            id='name'
            />
              <label htmlFor="name"><FontAwesomeIcon icon={faUser} width={12}/></label>
          </div>
          
          <div className="label-div">
            <input 
            type="email" 
            name="email"
            placeholder="Email  e.g. name@gmail.com"
            id='email'
            />
              <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope}  width={12}/></label>
          </div>
          
          <div className="label-div">
            <input 
            type="Paddword" 
            name="Password"
            id='password'
            placeholder='Password'
            />
            <label htmlFor="password"> <FontAwesomeIcon icon={faLock} width={12} /></label>
          </div>
          
          <div className='btn-cont'>
            <button type='submit' className='signup-btn'>Sign Up</button>
          </div>
          </div>
        </form>

        
      </div>
    </div>
  )
}

export default Signup