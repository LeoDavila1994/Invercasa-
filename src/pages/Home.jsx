import React from 'react';
import isotipo from "../Imgs/logos/logo trans.png"

const Home = () => {
  return (
    <div className='home-container'>
      <article className='home-slider'>
        <img src={isotipo} className='isotipo'></img>
        <div className='home-slider-img'></div>
      </article>
      <div className='home-message'>
        <p>TU CASA TU MEJOR INVERSION</p>
      </div>
      <div className='home-options'>
        <div className='home-options-container-img'>
          <div className='options-img'>
            <p>Viviendas</p>
          </div>
        </div>
        <div className='home-options-container-img2'></div>
      </div>
    </div>
  );
};

export default Home;