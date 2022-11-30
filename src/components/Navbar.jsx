import React, { useState } from 'react';
import isotipo from "../Imgs/logos/logo trans.png"
import { useNavigate } from 'react-router-dom';
import "../css/Navbar.css"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const Navigation = useNavigate();

  const openMenu = () => {
    if(menuOpen === false){
      setMenuOpen(true);
    } else {
      setMenuOpen(false)
    }
  };

  const navigatePage = e => {

    if(e.target.innerText === "Inicio"){
      Navigation("/");
    } else if(e.target.innerText === "Sobre Nosotros"){
      Navigation("/sobre_nosotros");
    } else if(e.target.innerText === "Viviendas"){
      Navigation("/viviendas");
    } else if(e.target.innerText === "Inversiones"){
      Navigation("/inversiones");
    } else if(e.target.innerText === "Venta"){
      Navigation("/venta");
    } else if(e.target.innerText === "Contactanos"){
      Navigation("/contacto");
    }

    openMenu();
  };

  return (
    <header className={menuOpen? "navbar navbar-bg-open" : "navbar navbar-bg-close"}>
          <div className={menuOpen? "logo-container-invisible" : "logo-container-visible"}>
            <p className='plus'>PLUS</p>
            <img src={isotipo} className='isotipo'></img>
          </div>
          <input type="checkbox" id='menu'></input>
          <label htmlFor="menu" className='menu' onClick={openMenu}>
            <div className='icon-1'></div>
            <div className="icon-2"></div>
          </label>
          <div className='menu-list'>
            <ul className={menuOpen? " list-container list-container-visible" : "list-container list-container-invisible"}>
              <label htmlFor='menu' onClick={navigatePage} >Inicio</label>
              <label htmlFor='menu' onClick={navigatePage} >Sobre Nosotros</label>
              <label htmlFor='menu' onClick={navigatePage}>Viviendas</label>
              <label htmlFor='menu' onClick={navigatePage}>Inversiones</label>
              <label htmlFor='menu' onClick={navigatePage}>Venta</label>
              <label htmlFor='menu' onClick={navigatePage}>Contactanos</label>
            </ul>
          </div>
        </header>
  );
};

export default Navbar;