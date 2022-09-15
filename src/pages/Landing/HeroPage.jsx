import React from "react";
import LOGO from '../../assets/img/Logo2.png'
import '../../App.css'

export default function HeroPage() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <img src={LOGO} width={430} alt="logo" className="header_logo" />
      </div>
      <div className="hero-container" data-aos="fade-in">
        <button className="btn btn-primary">DownLoad Game</button>
      </div>
    </section>
  );
}
