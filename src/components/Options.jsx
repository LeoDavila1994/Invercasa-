import React from 'react';

const Options = ({ img, letter }) => {

  return (
    <div className='option-container' style={{backgroundImage: `url(${img})`}}>
      <p>{letter}</p>
    </div>
  );
};

export default Options;