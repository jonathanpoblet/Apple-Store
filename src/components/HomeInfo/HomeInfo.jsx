import React from "react";
import { FaBox, FaLock, FaMedal } from "react-icons/fa";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

import "./homeInfo.css";

export default function HomeInfo() {
  return (
    <section className='home-info'>
      <div className='home-info-container-black'>
        <FaLock className='home-info-container-black-icon' />
        <h3 className='home-info-container-black-title'>Seguridad</h3>
        <p className='home-info-container-black-text'>Protección de base de datos personales</p>
      </div>
      <div className='home-info-container-white'>
        <FaMedal className='home-info-container-white-icon' />
        <h3 className='home-info-container-white-title'>Garantía</h3>
        <p className='home-info-container-white-text'>Garantía oficial de Apple por 1 año</p>
      </div>
      <div className='home-info-container-white'>
        <FaBox className='home-info-container-white-icon' />
        <h3 className='home-info-container-white-title'>Devolución</h3>
        <p className='home-info-container-white-text'>10 días posteriores a la compra</p>
      </div>
      <div className='home-info-container-black'>
        <BsFillHandThumbsUpFill className='home-info-container-black-icon' />
        <h3 className='home-info-container-black-title'>Servicio</h3>
        <p className='home-info-container-black-text'>Asesoramiento personalizado 100%</p>
      </div>
    </section>
  );
}
