import React from "react";
import { useNavigate } from "react-router";
import vin3 from "../../images/vin3.png";
import "./styles.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/register");
  };

  // lyrics para Get the prompter element
  let prompter = document.querySelector("marquee");
  let state = "start";
  /**
   * Control the prompter speed and scrolling
   * @param  {Event} event The event object
   */
  function controlPrompter(event) {
    if (event.code && event.code !== "Space") return;
    state = state === "start" ? "stop" : "start";
    prompter[state]();
  }
  // Listen for keyup and click events
  document.addEventListener("keyup", controlPrompter);
  // prompter.addEventListener('click', controlPrompter);

  return (
    <>

    <div className='mainContainer'> 
    <div className='header'>
      <h2 className='logo'>musica</h2>
    </div>
 

      <div className='app-desc'> 
      <div className="musicnotes">
                <div className="note-1">
                  ♬
                </div>
                <div className="note-2">
                  ♬
                </div>
                <div className="note-3">
                  #
                </div>
                <div className="note-5">
                 ♬
                </div>
                <div className="note-6">
                  ♬
                </div>
          </div>
            <img className='discImg' src= {vin3}alt='musicdiscimg' /> 
          
          
        <section className="mid-div">
          <div className="sentence">
            <p id="motto">A Music App Where You Can</p>
            </div>
            <div className="words-rotate">
          
              <span>Chill !</span>
              <span>Inspire !</span>
              <span>Relax !</span>
              <span>Party !</span>
            </div>
          
        </section>
        <div className='get-started-btn'>
          <button className='glow-on-hover' onClick={handleclick}> Get Started</button>
          </div>  
      </div>   
      
      <div className='homePage-footer'>
            <p id="home-footer-text">All Rights Reserved | musica 2022</p>
      </div>
      </div>
      <div className="startBtn">
        <button className="glow-on-hover" onClick={handleclick}>
          {" "}
          Get Started
        </button>
      </div>
      <div className="footer">All Rights Reserved | musica 2022</div>
    </>
  );
};

export default HomePage;
