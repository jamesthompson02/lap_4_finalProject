
// import React from "react";
// import { useNavigate } from 'react-router-dom';
// //
// //import { useState, useEffect } from "react";
// import { FormRow, Alert, Navbar } from "../../components";
// import { displayAlert, registerUser, loginUser } from "../../actions";
// import { useSelector, useDispatch } from "react-redux";


// import './styles.css';

// const initialState = {
//   username: "",
//   email: "",
//   password: "",
//   isMember: true,
//   }




// const RegisterPage = () => {

//     const navigate = useNavigate();
  
//     const handlebackhome = () => {
//           navigate("/");
//     }
  
//     return (
//       <>
//       <div className='main-div-login'>
//       <div className='headerLogin'>
//         <h2 className='logo'>musica</h2>
//       </div>
//       {/* login page form */}
//       {/* < className="login-wrap"> */}
//     <div className="login-html">
//       <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
//       <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
//       <div className="login-form">
//         <div className="sign-in-htm">
//           <div className="group">
//             <label for="user" className="label">Username</label>
//             <input id="user" type="text" className="input"/>
//           </div>
//           <div className="group">
//             <label for="pass" className="label">Password</label>
//             <input id="pass" type="password" className="input" data-type="password"/>
//           </div>
  
//           <div className="group">
//             <input type="submit" className="btn-signin" value="Sign In"/>
//             <button className='glow-on-hover-login' onClick={handlebackhome}> Back To HomePage </button>
//           </div>
//           <div className="hr"></div>
//         </div>
//         <div className="sign-up-htm">
//           <div className="group">
//             <label for="user" className="label">Username</label>
//             <input id="user" type="text" className="input"/>
//           </div>
//           <div className="group">
//             <label for="pass" className="label">Password</label>
//             <input id="pass" type="password" className="input" data-type="password"/>
//           </div>
//           <div className="group">
//             <label for="pass" className="label">Repeat Password</label>
//             <input id="pass" type="password" className="input" data-type="password"/>
//           </div>
//           <div className="group">
//             <label for="pass" className="label">Email Address</label>
//             <input id="pass" type="text" className="input"/>
//           </div>
//           <div className="group">
//             <input type="submit" className="btn-signin" value="Sign Up"/>
//           </div>
  
//         </div>
//       </div>
//     </div>
    
//   </div>    

//   </>
//   )

// };

// // const Register = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const user = useSelector((state) => state.registeredUser.user);
// //   const isLoading = useSelector((state) => state.registeredUser.isLoading);
// //   const showAlert = useSelector((state) => state.registeredUser.showAlert);
// //   const [values, setValues] = useState(initialState);

// //   const toggleMember = () => {
// //     setValues({ ...values, isMember: !values.isMember });
// //   };

// //   const handleChange = (e) => {
// //     setValues({ ...values, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { username, email, password, isMember } = values;
// //     if (!username || !password || (!isMember && !email)) {
// //       dispatch(displayAlert());
// //       setTimeout(() => {
// //         dispatch({
// //           type: "CLEAR_ALERT",
// //         });
// //       }, 2000);
// //       return;
// //     }
// //     const currentUser = { username, email, password };
// //     if (isMember) {
// //       dispatch(loginUser(currentUser));
// //     } else {
// //       dispatch(registerUser(currentUser));
// //     }
// //   };

// //   useEffect(() => {
// //     if (user) {
// //       setTimeout(() => {
// //         navigate("/profile");
// //       }, 2000);
// //     }
// //   }, [user, navigate]);
// //   return (
// //     <div className="registerContainer">
// //       <div className="registerWrapper">
// //         <Navbar />
// //         <form onSubmit={handleSubmit} className="form">
// //           <h3>{values.isMember ? "Login" : "Register"}</h3>
// //           {showAlert && <Alert />}
// //           <div className="align">
// //             {/* username input */}
// //             <FormRow
// //               type="text"
// //               name="username"
// //               value={values.username}
// //               htmlFor="username"
// //               handleChange={handleChange}
// //             />

// //             {/* email input */}
// //             {!values.isMember && (
// //               <FormRow
// //                 type="email"
// //                 name="email"
// //                 value={values.email}
// //                 htmlFor="email"
// //                 handleChange={handleChange}
// //               />
// //             )}
// //             {/* password input */}
// //             <FormRow
// //               type="password"
// //               name="password"
// //               value={values.password}
// //               htmlFor="password"
// //               handleChange={handleChange}
// //             />
// //           </div>
// //           <button disabled={isLoading} type="submit">
// //             Submit
// //           </button>
// //           <p>
// //             {values.isMember ? "Not a member yet?" : "Already a member?"}
// //             <button type="button" onClick={toggleMember} className="member-btn">
// //               {values.isMember ? "Register" : "Login"}
// //             </button>
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };


// export default RegisterPage;
