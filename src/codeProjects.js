import NavComponent from "./Navbar";
import Profile from "./Home";
import NewParticle from "./realParticleJS.js";
import Project from "./Project";
import MyCard from "./Card";
import React from "react";
import SpacingGrid from "./grid2";
import "./styles.css";

export default function codeProjects() {
  return (
    <div className="App">
      <div className="Paticles-JS">
        <NewParticle />
      </div>
      <Project />
      <div className="theGrid">
        <SpacingGrid />
      </div>
      <NavComponent />
    </div>
  );
}