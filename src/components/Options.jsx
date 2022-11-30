import React from 'react';
import  { useNavigate } from "react-router-dom";

const Options = ({ img, letter, route }) => {

  const Navigate = useNavigate();

  const redirection = () => {
    Navigate(`/${route}`)
  };

  return (
    <div className='option-container' style={{backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`}} onClick={redirection}>
      <p>{letter}</p>
    </div>
  );
};

export default Options;