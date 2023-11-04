import React from 'react';
import './style/login.css';
import { experimental_taintUniqueValue } from 'react';
import  { useState, useEffect } from 'react';
import {
  useNavigate
} from "react-router-dom";


function Login (){
         

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate=useNavigate()

    
      const handleSubmit=(event)=> {
        event.preventDefault();
        
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);
        const url = new URL('http://127.0.0.1:5000/user?email=${this.state.email}&password=${this.state.password}');
        url.search = params.toString();
        console.log(url.toString)
        fetch(url)
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            console.log("Data", data);
            Navigate("/")
           
          })
          .catch((error) => {
            console.error('Error fetching data:', error); 
          });
      }
    
    
       return (<div className='login-page'>
        
        <div className='login-card'>
        <form onSubmit={handleSubmit}>
            
        <div>
        <label>Email</label>
        <input  type="email" name='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>


         <div>
        <label>Password</label>
        <input type="password" name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <input type="submit" value="login"  />
        </form>
        
        <a href='#'>forget password</a>
        </div>  
        
        
       </div>)
       
    
  }
export default Login;