import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './styles.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
      <>
        <div>
        <h2 className='logo'>musica</h2>
          <Menu>
            <NavLink to={"/"} className="menu-item">
               Home
            </NavLink>
            <NavLink to={"/"} className="menu-item">
              Signin
            </NavLink>
            <NavLink to={"/"} className="menu-item">
              Dashboard
            </NavLink>
            <NavLink to={"/"} className="menu-item">
              My Playlist
            </NavLink>
            <NavLink to={"/"} className="menu-item">
                Logout
            </NavLink>
          </Menu>
        </div>
      </>
   
  )
};

export default Navbar;
