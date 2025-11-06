import React from "react";
import "../styles/heroPage.css";
import heroImg from "../images/heroImg.svg"; // 

function Hero() {
  return (
    <section class="hero">
      <div class="hero-content">
        <h1>
          Lessons and insights <br />
          <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer, site or social media?
        </p>
        <button class="hero-btn">Register  →</button>
      </div>

      <div class="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
