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
      <div className="header">
        <h2 className="logo">musica</h2>
      </div>
      <div className="mainContainer">
        <div className="app-desc">
          <section className="wrapper">
            <div className="sentence">
              <span>A Music App Where You Can</span>
              <div className="words rotate">
                <span>Learn a language !</span>
                <span>Chill !</span>
                <span>Inspire !</span>
                <span>Relax !</span>
                <span>Party !</span>
              </div>
            </div>
          </section>
        </div>

        <div className="musicnotes">
          <div className="note-1">♬</div>
          <div className="note-2">♬</div>
          <div className="note-3">#</div>
          <div className="note-5">♬</div>
          <div className="note-6">♬</div>
        </div>
        <img className="discImg" src={vin3} alt="musicdiscimg" />
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
