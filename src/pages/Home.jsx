import React, { useEffect, useState } from 'react';
import isotipo from "../Imgs/logos/logo trans.png"
import sliderImg1 from "../Imgs/Movile/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg";
import sliderImg2 from "../Imgs/Movile/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import sliderImg3 from "../Imgs/Movile/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg";
import sliderImg4 from "../Imgs/Movile/webaliser-_TPTXZd9mOo-unsplash.jpg";
import Options from "../components/Options";
import house from "../Imgs/Options/breno-assis-r3WAWU5Fi5Q-unsplash.jpg";
import inver from "../Imgs/Options/inversion.jpg";
import sales from "../Imgs/Options/bussines.jpg";

const Home = () => {

  const banner = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

  const [randomImg, setRandomImg] = useState(Math.floor(Math.random() * banner.length));

  useEffect(() => {
    setInterval(() => setRandomImg(Math.floor(Math.random() * banner.length)), 8000)
  },[]);

  return (
    <div className='home-container'>
      <article className='home-slider'>
        <img src={isotipo} className='isotipo'></img>
        <div className='home-slider-img' style={{backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner[randomImg]})`}}></div>
      </article>
      <div className='home-message'>
        <p>TU CASA TU MEJOR INVERSION</p>
      </div>
      <div className='home-options-container'>
        <Options img={house} letter={"Viviendas"}/>
        <Options img={sales} letter={"Inversiones"}/>
        <Options img={inver} letter={"Vende tu casa"}/>
      </div>
    </div>
  );
};

export default Home;