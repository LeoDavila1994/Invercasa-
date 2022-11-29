import React from 'react';
import isotipo from "../Imgs/logos/logo trans.png"
import sliderImg from "../Imgs/Movile/r-architecture-2gDwlIim3Uw-unsplash.jpg";

const Home = () => {
  return (
    <div className='home-container'>
      <article className='home-slider'>
        <img src={isotipo} className='isotipo'></img>
        <div className='home-slider-img' style={{backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sliderImg})`}}></div>
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