import React from "react";
import LOGO from "../../assets/img/logopan.png";

export default function SidebarLandingComponent() {
  const onHero = async () => {
    document.getElementById("hero");
    console.log("hero");
  };
  const onAbout = async () => {
    document.getElementById("about");
    console.log("about");
  };

  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={LOGO} className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">PREMO RAGNAROK</a>
            </h1>
            <h1 className="text-light">
              <a href="index.html">BY PANDORA</a>
            </h1>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              
              <li>
                <a href="#hero" className="nav-link scrollto">
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-download" /> <span>Download</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-info-circle" /> <span>Server Info</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content" /> <span>Rule Server</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-map" /> <span>World Map</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bxs-contact" /> <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-donate-heart" /> <span>Donate</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-log-in" /> <span>Register / Login</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
