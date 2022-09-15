import React from "react";
import { Link } from "react-router-dom";
import FooterLandingComponent from "../components/Layout/FooterLandingComponent";
import SidebarLandingComponent from "../components/Layout/SidebarLandingComponent";
import AboutPage from "./Landing/AboutPage";
import HeroPage from "./Landing/HeroPage";

export default function HomePage() {
  return (
    <>
     <SidebarLandingComponent/>
     <HeroPage/>
     <AboutPage/>
     <FooterLandingComponent/>
    </>
  );
}
