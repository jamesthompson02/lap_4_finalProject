import React from "react";
import { useState, useEffect } from "react";
import { FormRow, Alert } from "../../components";
import { displayAlert, registerUser, loginUser } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,
};

const RegisterPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registeredUser.user);
  const isLoading = useSelector((state) => state.registeredUser.isLoading);
  const showAlert = useSelector((state) => state.registeredUser.showAlert);
  const [values, setValues] = useState(initialState);
  const [checked] = useState(true);
 

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      dispatch(displayAlert());
      setTimeout(() => {
        dispatch({
          type: "CLEAR_ALERT",
        });
      }, 2000);
      return;
    }
    const currentUser = { username, password };
    dispatch(loginUser(currentUser));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, password, email } = values;
    if (!username || !password || !email) {
      dispatch(displayAlert());
      setTimeout(() => {
        dispatch({
          type: "CLEAR_ALERT",
        });
      }, 2000);
      return;
    }
    const currentUser = { username, email, password };
    dispatch(registerUser(currentUser));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user, navigate]);

  // useEffect(() => {
  //   document.documentElement.className = theme;
  //   localStorage.setItem("theme", theme);
  // }, [theme]);


  const handlebackhome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="main-div-login">
        <div className="headerLogin">
          <h2 className="logo">musica</h2>
        </div>
        {showAlert && <Alert />}
        {/* login page form */}
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked={checked}
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  {/* username input */}
                  <FormRow
                    type="text"
                    name="username"
                    value={values.username}
                    htmlFor="username"
                    handleChange={handleChange}
                  />
                </div>
                <div className="group">
                  {/* password input */}
                  <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    htmlFor="password"
                    handleChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    disabled={isLoading}
                    onClick={handleLogin}
                    className="btn-signin"
                    value="Sign In"
                  />
                  <button
                    className="glow-on-hover-login"
                    onClick={handlebackhome}
                  >
                    {" "}
                    Back To HomePage{" "}
                  </button>
                </div>
                <div className="hr"></div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  {/* username input */}
                  <FormRow
                    type="text"
                    name="username"
                    value={values.username}
                    htmlFor="username"
                    handleChange={handleChange}
                  />
                </div>
                <div className="group">
                  {/* password input */}
                  <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    htmlFor="password"
                    handleChange={handleChange}
                  />
                </div>
                <div className="group">
                  {/* email input */}
                  <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    htmlFor="email"
                    handleChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    disabled={isLoading}
                    onClick={handleRegister}
                    className="btn-signin"
                    value="Sign Up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

