import React from "react";
import { Link } from "react-router-dom";
import {MDBIcon} from "mdb-react-ui-kit";
import Team from "./Team";
function Hero() {
  let styles = {
    fontSize:"55px",

    fontFamily:"serif",
    padding: "100px",
    paddingRight:"230px"
  };

  return (
    <div className="aboutBackground">
    <div className="conatainer mt-5" >
      <div className="row">
        <div className="col-6 mt-4">
          <h1 style={styles}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et im ad minim veniam quis
            nostrud exercit atiooris.
          </h1>
          <Link>
          <button>Read More <MDBIcon icon="angle-right" /> </button>  
          </Link>
        </div>
        <div className="col-6 mt-5" style={{width:"40%"}}>
          <img style={{width:"120%",height:"80%"}} src="../media/uncle.jpg"></img>
        </div>
      </div>
      <div className="row ">
        <div className="team">
        <Team />
        </div>
     
      </div>
    </div>
    </div>

  );
}

export default Hero;