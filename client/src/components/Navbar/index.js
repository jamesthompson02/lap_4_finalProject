import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './styles.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
      <>
        <div className='main-div-login'>
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





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../../actions";
// import { useDispatch } from "react-redux";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("../register");
//   };

//   return (
//     <nav>
//       <button onClick={handleLogout}>Logout</button>
//     </nav>
//   );
// };

// export default Navbar;

