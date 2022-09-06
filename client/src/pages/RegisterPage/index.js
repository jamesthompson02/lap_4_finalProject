
import React from "react";
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from "react";
import { FormRow, Alert, Navbar } from "../../components";
import { displayAlert, registerUser, loginUser } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import musicDisc_img from "../../images/vin3.png";
import "./styles.css";


const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,

};

  }




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
  
  

  </>
  )

// const RegisterPage = () => {

//     const navigate = useNavigate();

//     const handlebackhome = () => {
//           navigate("/");
//     }

//   return(
//   <>
//    <div classNameName='headerLogin'>
//       <h2 classNameName='logo'>musica</h2>
//     </div>
//      <div classNameName='mainContainer'>

//     {/* loginform  */}
//      <div className="main">
// 		<input type="checkbox" id="chk" aria-hidden="true"/>

// 			<div className="signup">
// 				<form>
// 					<label for="chk" aria-hidden="true">Sign up</label>
// 					<input type="text" name="txt" placeholder="User name" required=""/>
// 					<input type="email" name="email" placeholder="Email" required=""/>
// 					<input type="password" name="pswd" placeholder="Password" required=""/>
// 					<button className="btn">Sign up</button>
// 				</form>
// 			</div>

// 			<div className="login">
// 				<form>
// 					<label for="chk" aria-hidden="true">Login</label>
// 					<input type="email" name="email" placeholder="Email" required=""/>
// 					<input type="password" name="pswd" placeholder="Password" required=""/>
// 					<button className="btn">Login</button>
// 				</form>
// 			</div>
// 	</div>

//       {/* musicnotes  */}
//         <div classNameName="musicnotes">
//               <div classNameName="note-1">
//                 ♬
//               </div>
//               <div classNameName="note-2">
//                 ♬
//               </div>
//               <div classNameName="note-3">
//                 #
//               </div>
//               <div classNameName="note-5">
//                ♬
//               </div>
//               <div classNameName="note-6">
//                 ♬
//               </div>
//         </div>
//           <img classNameName='discImg' src= {musicDisc_img}alt='musicdiscimg' />
//         </div>

//         <div classNameName='backhome'>
//           <button classNameName='glow-on-hover' onClick={handlebackhome}> Back </button>
//           </div>

//     <div classNameName='footer'>
//           All Rights Reserved | musica 2022
//     </div>

//   </>

//   )

// };

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registeredUser.user);
  const isLoading = useSelector((state) => state.registeredUser.isLoading);
  const showAlert = useSelector((state) => state.registeredUser.showAlert);
  const [values, setValues] = useState(initialState);
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, isMember } = values;
    if (!username || !password || (!isMember && !email)) {
      dispatch(displayAlert());
      setTimeout(() => {
        dispatch({
          type: "CLEAR_ALERT",
        });
      }, 2000);
      return;
    }
    const currentUser = { username, email, password };
    if (isMember) {
      dispatch(loginUser(currentUser));
    } else {
      dispatch(registerUser(currentUser));
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
  }, [user, navigate]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <Navbar />
        <button className="btn" onClick={toggleTheme}>
          toggle
        </button>
        <form onSubmit={handleSubmit} className="form">
          <h3>{values.isMember ? "Login" : "Register"}</h3>
          {showAlert && <Alert />}
          <div className="align">
            {/* username input */}
            <FormRow
              type="text"
              name="username"
              value={values.username}
              htmlFor="username"
              handleChange={handleChange}
            />

            {/* email input */}
            {!values.isMember && (
              <FormRow
                type="email"
                name="email"
                value={values.email}
                htmlFor="email"
                handleChange={handleChange}
              />
            )}
            {/* password input */}
            <FormRow
              type="password"
              name="password"
              value={values.password}
              htmlFor="password"
              handleChange={handleChange}
            />
          </div>
          <button disabled={isLoading} type="submit" className="btn">
            Submit
          </button>
          <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <button type="button" onClick={toggleMember} className="btn">
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Register;
