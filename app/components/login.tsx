"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  , faLock} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';


function Login() {
    const navigate = useNavigate(); // react rooter navigate hook


    const[username, setUserName] = useState("")
    const[password, setPassword] = useState("")

    // State to show the alert
    const [alert, setAlert] = useState<{ message: string; type: string; show: boolean }>({
        message: "",
        type: "",
        show: false,
      });


      // Auto-hide alert after 3 seconds
        useEffect(() => {
            if (alert.show) {
            const timer = setTimeout(() => {
             setAlert({ ...alert, show: false });
             }, 3000);
             return () => clearTimeout(timer);
            }
        }, [alert]);


    //dummy Authentication to be replaced
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if(username === "EliasFares" && password === "admin123")
        {
            setAlert({ message: "✅ Login Successful!", type: "success", show: true });
            setTimeout(() => navigate("/dashboard"), 1500);
        } else {
            setAlert({ message: "❌ Invalid username or password", type: "error", show: true });
        }
    };


  return (
     <div className='sign-cont'>

             {/* Alert Box */}
             {alert.show && (
                <div
                className={`alert-box ${alert.type === "success" ? "alert-success" : "alert-error"} 
                ${alert.show ? "" : "alert-hidden"}`}
                >
                {alert.message}
                </div>
            )}
     
           {/*left side*/}
           <div className="sign-intro">
             <p>Do not have an account? <br /></p>
             <div className="login-cont">
                <button className="login-btn" onClick={() => navigate("/")}>
                Sign Up
                </button>
            </div>
           </div> 
     
           {/*right side*/}
           <div className='sign-content'>
             <h3>Login</h3>
             <form className='addUserForm'>
               <div className="inputGroup">
               <div className="label-div">
                 <input 
                 type="text" 
                 name="username"
                 placeholder="Username "
                 id='name'
                 value={username}
                 onChange={(e) => setUserName(e.target.value)}
                 />
                   <label htmlFor="name"><FontAwesomeIcon icon={faUser} width={12}/></label>
               </div>
            
               
               <div className="label-div">
                 <input 
                 type="Paddword" 
                 name="Password"
                 id='password'
                 placeholder='Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
                 <label htmlFor="password"> <FontAwesomeIcon icon={faLock} width={12} /></label>
               </div>
               
                <div className='login-cont'>
                    <button className='login-btn-log' onClick={handleLogin}>Login</button>
                </div>
               </div>
             </form>
     
             
           </div>
         </div>
  )
}

export default Login

{/*
 <div className='sign-cont'>
           <h3>Sign Up</h3>
           <form className='addUserForm'>
                <div className="inputGroup">
                    {/*UserName*/}
                    {/*
                    <div className="label-div">
                    <label htmlFor="name"><FontAwesomeIcon icon={faUser} width={12}/> Name: </label>
                    </div>
                    <input 
                    type="text" 
                    name="username"
                    placeholder="Enter Your Name"
                    id='name'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />

                    {/*PassWord*/}
                    {/*
                    <div className="label-div">
                    <label htmlFor="password"> <FontAwesomeIcon icon={faLock} width={12} /> Password: </label>
                    </div>
                    <input 
                    type="Paddword" 
                    name="Password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                
                
                </div>
           </form>

           {/*navigate to dashboard*/}
           {/*
           <div className='login-cont'>
            <button className='login-btn' onClick={handleLogin}>Login</button>
           </div>
            {/* Navigate to Signup */}
            {/*
            <div className="login-cont">
                <p>Dont have an account?</p>
                <button className="login-btn" onClick={() => navigate("/")}>
                Sign Up
                </button>
            </div>
        </div>
*/}
            