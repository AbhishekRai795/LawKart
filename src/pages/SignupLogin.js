import React from 'react';
import './SignupLogin.css';


import statueImage from './image.png';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignupLogin() {

   const [verify, setverify] = useState(false);

   let signupVerification = () => {

          const regex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.]+\.[a-z]{2,}$/;
          const regexuser = /^[A-Z]+[a-z0-9_@$%&]/;
          const regexpass = /(?=^.{8,}$)(?=.*\d)/
          let email = document.getElementById('EmailId').value;
          let username = document.getElementById('Username').value;
          let password = document.getElementById('Password').value;
          let result = regex.test(email);
          let resultuser = regexuser.test(username);
          let resultpwd = regexpass.test(password);
          if (result) {
            setverify(true);
          }
          else{
            alert('Email Id not valid');
          }

          if (username.length > 5 && resultuser) {
            setverify(true);
          }
          else{
            setverify(false);
            alert('username invalid');
          }

          if (resultpwd){
            setverify(true);
          }
          else{
            setverify(false);
            alert('password invalid');
          }
   }

   


  
  return (
    <div className='body-style'>

      {/* <div className="page-bg"> */}
        
          <div className='d-flex justify-center-x-1 justify-center-y-1'>

            <div className="w-50 login-container-1">
              <div className="lkli">
              <p>LawKart <br />Sign-up</p>
              
                

              </div>
              <form className='my-form'>
                <div className="email-id">
                  <div className="lable-email">
                    <label htmlFor="EmailId">Email-Id:</label>
                  </div>
                  <div className="inputEmail">
                    <input type="text" className='input-feild' id='EmailId' required />
                  </div>
                </div>


                <div className="username-s">
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
                  <button className='btn-log-in-design' onClick={signupVerification}>Sign-up</button>
                  {verify && <Navigate to={'/login'}/>}
                </div>

                <div className="fpnn">
                  
                  <Link to={'/login'}>Already a Member ?</Link>

                </div>

              </form>
            </div>

            
                <div className="w-50 dark-image">
                  <img src={statueImage} alt="law" className='image' />
                </div>
              


          </div>
        
      {/* </div> */}

    </div>
  );
}
