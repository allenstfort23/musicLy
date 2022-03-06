import React from "react";
import Music from "./img/music-banner.jpeg";
import "./banner.css";

function Banner() {
  return (
    <header className="banner-layout">
      <img className="banner" style={{ backgroundSize: "cover" }} src={Music} />
      <h1 className="banner__title">MusicLy</h1>
      <h2 className="banner__text">All Your Music In One Place</h2>
      <div className="banner__fadeBottom text-center">Scroll To The Right</div>
    </header>
  );
}

export default Banner;
