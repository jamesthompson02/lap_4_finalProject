import React from "react";
import { useNavigate } from 'react-router-dom';
import musicDisc_img from '../../images/vin3.png'
import './styles.css';

const RegisterPage = () => {

    const navigate = useNavigate();
  
    const handlebackhome = () => {
          navigate("/");
    }
  

  return(
  <>
   <div classNameName='headerLogin'>
      <h2 classNameName='logo'>musica</h2>
    </div>
     <div classNameName='mainContainer'> 

    {/* loginform  */}
     <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className="btn">Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className="btn">Login</button>
				</form>
			</div>
	</div>

      {/* musicnotes  */}
        <div classNameName="musicnotes">
              <div classNameName="note-1">
                ♬
              </div>
              <div classNameName="note-2">
                ♬
              </div>
              <div classNameName="note-3">
                #
              </div>
              <div classNameName="note-5">
               ♬
              </div>
              <div classNameName="note-6">
                ♬
              </div>
        </div>
          <img classNameName='discImg' src= {musicDisc_img}alt='musicdiscimg' /> 
        </div>

        <div classNameName='backhome'>
          <button classNameName='glow-on-hover' onClick={handlebackhome}> Back </button>
          </div>
       
    <div classNameName='footer'>
          All Rights Reserved | musica 2022
    </div>
  
  
  
  </>



  )
};

export default RegisterPage;
