import React, { useState } from 'react';
import './LoginSignup.css';





import statueImage from './image.png';
import { Link, Navigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';

export default function LoginSignup() {

  const [clicked, setclicked] = useState(false);

  const formVerification = () => {
    let username = document.getElementById('Username').value
    let password = document.getElementById('Password').value;

    if (username !== 'Abhishek795' || password !== 'guddi@975') {
          alert('intruder alert');
          // document.getElementById('Username').value = '';
          document.getElementById('Password').value = ''; 
          
    }
    else {
          setclicked(true);
    }
  
  

  }
  
  return (
    <div className='body-style-L'>

      {/* <div className="page-bg"> */}
        
          <div className='d-flex justify-center-x-L justify-center-y-L'>

            <div className="w-50 login-container-L">
              <div className="lkli">
              <p>LawKart <br />Log-in</p>
              
              </div>
              <form className='my-form'>
                <div className="username">
                  <div className="lableUser">
                    <label htmlFor="Username">Username:</label>
                  </div>
                  <div className="inputUser">
                    <input type="text" className='input-feild' id='Username' required />
                  </div>
                </div>

                <div className="password">
                  <div className="lablepwd">
                    <label htmlFor="Password">Password:</label>
                  </div>
                  <div className="inputpwd">
                    <input type="password" className='input-feild' id='Password' required />
                  </div>
                </div>

                <div className="btn-log-in">
                  <button className='btn-log-in-design'  onClick={formVerification}>Log-in</button>
                  
                  {clicked && <Navigate to={'/home'}/>}
                </div>

                <div className="fpnn">
                  <a href="/">Forgot Password?</a>
                  <Link to={'/signup'}>New Here?</Link>

                </div>

              </form>
            </div>

            
                <div className="w-50 dark-image-L">
                  <img src={statueImage} alt="law" className='image-L' />
                </div>
              


          </div>
        
      {/* </div> */}

    </div>
  );
}
