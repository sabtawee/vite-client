import React from "react";
import LOGO from '../../assets/img/Logo2.png'
import '../../App.css'
import BTN from '../../assets/img/btn.png'
import BTNREGIS from '../../assets/img/btnregis.png'

export default function HeroPage() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <img src={LOGO} width={430} alt="logo" className="header_logo" />
      </div>
      <div className="hero-container" data-aos="fade-in" >
        <img src={BTNREGIS} className="button2"/>
        <img src={BTN} className="button2"/>
      </div>
      
    </section>
  );
}
