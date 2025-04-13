import React from "react";
import FruitCard from "./FruitCard";

function Hero() {
  return (
    <>
      <div className="hero_HomePage">
        <img src="../media/farm2-slider-bg.jpg" alt="home apge img"/>
        <div className="container">
          <div className="row">

              <h2>
                Welcome to the place where
                <br />
                naturals are born
              </h2>
             
    
          </div>
          <div className="row">
            <FruitCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
