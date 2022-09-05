import React from 'react';
import "./style.css";

const Btn = ({text, handleClick}) => {
    return (
        <button className="btn-submit" onClick={handleClick}>{text}</button>
    );
}

export default Btn;