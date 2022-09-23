import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../components";

const ProfilePage = () => {
  const user = useSelector((state) => state.registeredUser.user);
  return (
    <div style={{'color': 'white'}}>
      Welcome to your profile {user}!
    </div>
  );
};

export default ProfilePage;
