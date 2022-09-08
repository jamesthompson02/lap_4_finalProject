import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './styles.css';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className="main-div">
      <NavLink to={"/dashboard"}>
        <h2 className='logo'>
          musica
        </h2>
      </NavLink>
      <Menu>
        <NavLink to={"/dashboard"} className="menu-item">
          Dashboard
        </NavLink>
        {/* <NavLink to={"/profile"} className="menu-item">
          Profile
        </NavLink> */}
        <NavLink to={"/playlist"} className="menu-item">
          Playlist
        </NavLink>
        <NavLink to={"/logout"} className="menu-item">
          Logout
        </NavLink>
      </Menu>

      <Outlet />
    </div>

  )
};

export default Navbar;
