import React, {useRef} from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MenuIcon from '@mui/icons-material/Menu';
import Btn from '../Btn';
import './dashboard.css';
// import { NavLink } from 'react-router-dom';

const Form = () => {
    const songNameInput = useRef();
    const artistNameInput = useRef();
    const fromLanguage = useRef();
    const toLanguage = useRef();
  
    //
   
    return (
        <>
        <div className='header'>
        <h2 className='logo'>musica</h2>
      </div>

        <div className="dashForm">
        <form>
            <div>
                {/* <label htmlFor='songName'>Song Name:</label> */}
                <input ref={songNameInput} type="text" id="songName" name="songName" placeholder='Enter Song Name Here'/>
            
            
                {/* <label htmlFor='artistName'>Artist Name:</label> */}
                <input ref={artistNameInput} type="text" id="songName" name="songName" placeholder='Enter Artist Name Here'/>
            </div>
            <div className='chooselang'>
                <label className='fromTolabel' htmlFor="fromLanguage">From:</label>
                <select ref={fromLanguage} name="fromLanguage" id="fromLanguage">
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                </select>
                <label className='fromTolabel' htmlFor="toLanguage">To:</label>
                <select ref={toLanguage} name="toLanguage" id="toLanguage">
                    <option value="Spanish">Spanish</option>
                    <option value="English">English</option>
                </select>    
            </div>
            <div className='btn-div'><button className='btn-submit' text="Submit" >Submit</button>
            </div>
            
        </form>
        </div>

        </>
    );

    
}
export default Form;
