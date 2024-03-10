import "./App.css";
import "./styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Recommendation from "./Recommendation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Recommendation2 from "./Recommendation2";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MangaPreview />
      <p>My Recommendation Settings➡️</p>;
      <AnchorLink href="#reco" style={{ float: "left", color: "white" }}>
        Recommended For You
      </AnchorLink>
      <a href="#reco2" style={{ float: "left", color: "white" }}>
        Sop's Picks ✌️
      </a>
      <Recommendation />
      <SopReco />
      <Recommendation2 />
      <Footer />
    </div>
  );
}

const MangaPreview = () => {
  const image = ["solo.jpg", "boxer.png", "horizon.png", "windbreaker.png"];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${image[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${image[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${image[2]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${image[3]})` }}></div>
      </div>
    </Slide>
  );
};

const SopReco = () => {
  const image = [
    "sops/noblesse.png",
    "sops/MLS.png",
    "sops/kamisama.png",
    "sops/silenthorror.png",
    "sops/everything.png",
    "sops/revelationofyouth.png",
  ];
  return (
    <Slide>
      <div className="each-slide-effect2">
        <div style={{ backgroundImage: `url(${image[0]})` }}></div>
      </div>
      <div className="each-slide-effect2">
        <div style={{ backgroundImage: `url(${image[1]})` }}></div>
      </div>
      <div className="each-slide-effect2">
        <div style={{ backgroundImage: `url(${image[2]})` }}></div>
      </div>
      <div className="each-slide-effect2">
        <div style={{ backgroundImage: `url(${image[3]})` }}></div>
      </div>
      <div className="each-slide-effect2">
        <div style={{ backgroundImage: `url(${image[4]})` }}></div>
      </div>
      <div className="each-slide-effect2">
        <div style={{ backgroundImage: `url(${image[5]})` }}></div>
      </div>
    </Slide>
  );
};

export default App;
