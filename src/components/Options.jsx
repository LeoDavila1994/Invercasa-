import React from 'react';

const Options = ({ img, letter }) => {

  return (
    <div className='option-container' style={{backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`}}>
      <p>{letter}</p>
    </div>
  );
};

export default Options;