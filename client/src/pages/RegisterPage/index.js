import React from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const RegisterPage = () => {

    const navigate = useNavigate();
  
    const handlebackhome = () => {
          navigate("/");
    }
  
    return (
      <>
      <div className='main-div-login'>
      <div className='headerLogin'>
        <h2 className='logo'>musica</h2>
      </div>
      {/* login page form */}
      <div className="login-wrap">
    <div className="login-html">
      <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
      <div className="login-form">
        <div className="sign-in-htm">
          <div className="group">
            <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password"/>
          </div>
  
          <div className="group">
            <input type="submit" className="btn-signin" value="Sign In"/>
            <button className='glow-on-hover-login' onClick={handlebackhome}> Back To HomePage </button>
          </div>
          <div className="hr"></div>
        </div>
        <div className="sign-up-htm">
          <div className="group">
            <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Repeat Password</label>
            <input id="pass" type="password" className="input" data-type="password"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Email Address</label>
            <input id="pass" type="text" className="input"/>
          </div>
          <div className="group">
            <input type="submit" className="btn-signin" value="Sign Up"/>
          </div>
  
        </div>
      </div>
    </div>
  </div>    
      </div>
          
    </>
    )
}

export default RegisterPage;
