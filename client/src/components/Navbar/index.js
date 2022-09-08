import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './styles.css';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className="main-div">
      <div className="topbar">
        <NavLink to={"/dashboard"}>
          <span className='logo-navbar'>
            musica
          </span>
        </NavLink>
        <Menu>
          <NavLink to={"/dashboard"} className="menu-item">
            Dashboard
          </NavLink>
          <NavLink to={"/playlist"} className="menu-item">
            Playlist
          </NavLink>
          <NavLink to={"/logout"} className="menu-item">
            Logout
          </NavLink>
        </Menu>
      </div>

      <div className="content-restriction-box">
        <Outlet />
      </div>
    </div>

  )
};

export default Navbar;
