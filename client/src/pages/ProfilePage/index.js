import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../components";

const ProfilePage = () => {
  const user = useSelector((state) => state.registeredUser.user);
  return (
    <div>
      <Navbar />
      Welcome to your profile {user}!
    </div>
  );
};

export default ProfilePage;
