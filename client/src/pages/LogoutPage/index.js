import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions";
import { useDispatch } from "react-redux";

function LogoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleBack = () => {
  //   navigator(-1);
  // };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("../register");
  };

  return (
    <>
      <div className="logoutContainer">
        <div className="logoutWrapper">
          <h1>Would You Like To Logout?</h1>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoutPage;
