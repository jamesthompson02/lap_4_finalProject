import { useState, useEffect } from "react";
import { FormRow, Alert, Navbar } from "../../components";
import { displayAlert, registerUser, loginUser } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registeredUser.user);
  const isLoading = useSelector((state) => state.registeredUser.isLoading);
  const showAlert = useSelector((state) => state.registeredUser.showAlert);
  const [values, setValues] = useState(initialState);

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
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <Navbar />
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
          <button disabled={isLoading} type="submit">
            Submit
          </button>
          <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <button type="button" onClick={toggleMember} className="member-btn">
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
