import React from "react";
import { Link } from "react-router-dom";
import FooterLandingComponent from "../components/Layout/FooterLandingComponent";
import SidebarLandingComponent from "../components/Layout/SidebarLandingComponent";
import AboutPage from "./Landing/AboutPage";
import HeroPage from "./Landing/HeroPage";
import ServerStatus from "./Landing/ServerStatus";
import ServerInfo from "./Landing/ServerInfo";
import PreRegister from "./Landing/PreRegister";
import Event from "./Landing/Event";
import RuleServer from "./Landing/RuleServer";


export default function HomePage() {
  return (
    <>
      <main id="main">
        <SidebarLandingComponent />
        <HeroPage />
        <ServerStatus />
        <AboutPage />
        <RuleServer/>
        <ServerInfo />
        <Event />
        <PreRegister />
        <FooterLandingComponent />
      </main>
    </>
  );
}
