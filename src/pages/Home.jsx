import React, { useEffect, useState } from 'react';
import sliderImg1 from "../Imgs/Movile/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg";
import sliderImg2 from "../Imgs/Movile/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import sliderImg3 from "../Imgs/Movile/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg";
import sliderImg4 from "../Imgs/Movile/webaliser-_TPTXZd9mOo-unsplash.jpg";
import Options from "../components/Options";
import house from "../Imgs/Options/breno-assis-r3WAWU5Fi5Q-unsplash.jpg";
import inver from "../Imgs/Options/inversion.jpg";
import sales from "../Imgs/Options/bussines.jpg";
import "../css/Home.css";
import { About } from "../pages"

const Home = () => {

  const banner = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

  const [randomImg, setRandomImg] = useState(Math.floor(Math.random() * banner.length));

  const incrementImg = () => {
    if (randomImg === 3) {
      setRandomImg(0);
    } else {
      setRandomImg(randomImg + 1)
    }
  };

  useEffect(() => {
    setTimeout(incrementImg, 8000)
  }, [randomImg]);

  return (
    <>
      <div className='home-container'>
        <article className='home-slider'>
          <div className='home-slider-img' style={{ backgroundImage: `url(${banner[randomImg]})` }}></div>
        </article>
        <div className='home-message'>
          <p>TU CASA TU MEJOR INVERSION</p>
        </div>
        <div className='home-options-container'>
          <Options img={house} letter={"Viviendas"} route={"viviendas"} />
          <Options img={sales} letter={"Inversiones"} route={"inversiones"} />
          <Options img={inver} letter={"Vende tu casa"} route={"venta"} />
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;