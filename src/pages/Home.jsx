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
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const banner = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

  const [randomImg, setRandomImg] = useState(Math.floor(Math.random() * banner.length));

  const [menuOpen, setMenuOpen] = useState(false);

  const Navigation = useNavigate();

  const openMenu = () => {
    if(menuOpen === false){
      setMenuOpen(true);
    } else {
      setMenuOpen(false)
    }
  };

  const incrementImg = () => {
    if(randomImg === 3){
      setRandomImg(0);
    } else {
      setRandomImg(randomImg + 1)
    }
  };

  useEffect(() => {
    setTimeout(incrementImg, 8000)
  },[randomImg]);

  const navigateHome = () => {
    Navigation("/");
  }

  const navigateAbout = () => {
    Navigation("/sobre_nosotros");
  }

  const navigateViviendas = () => {
    Navigation("/viviendas");
  }

  const navigateInversiones = () => {
    Navigation("/inversiones");
  }

  const navigateVenta = () => {
    Navigation("/venta");
  }

  return (
    <div className='home-container'>
      <article className='home-slider'>
        <header className={menuOpen? "navbar navbar-bg-open" : "navbar navbar-bg-close"}>
          <div className={menuOpen? "logo-container-invisible" : "logo-container-visible"}>
            <p>PLUS</p>
            <img src={isotipo} className='isotipo'></img>
          </div>
          <input type="checkbox" id='menu'></input>
          <label htmlFor="menu" className='menu' onClick={openMenu}>
            <div className='icon-1'></div>
            <div className="icon-2"></div>
          </label>
          <div className='menu-list'>
            <ul className={menuOpen? " list-container list-container-visible" : "list-container list-container-invisible"}>
              <li onClick={navigateHome}>Inicio</li>
              <li onClick={navigateAbout}>Sobre Nosotros</li>
              <li onClick={navigateViviendas}>Viviendas</li>
              <li onClick={navigateInversiones}>Inversiones</li>
              <li onClick={navigateVenta}>Venta</li>
            </ul>
          </div>
        </header>
        <div className='home-slider-img' style={{backgroundImage: `url(${banner[randomImg]})`}}></div>
      </article>
      <div className='home-message'>
        <p>TU CASA TU MEJOR INVERSION</p>
      </div>
      <div className='home-options-container'>
        <Options img={house} letter={"Viviendas"} route={"viviendas"}/>
        <Options img={sales} letter={"Inversiones"} route={"inversiones"}/>
        <Options img={inver} letter={"Vende tu casa"} route={"venta"}/>
      </div>
    </div>
  );
};

export default Home;