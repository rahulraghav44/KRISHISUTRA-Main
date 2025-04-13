import React from "react";
import "./Product.css";

function Hero() {
  return (
    <>
      <div className="">
        <img className="img" src="media/ProductBg.jpeg" style={{width:"100%",height:"70%",margin:"0 0 0 0"}}></img>

       <span>
       <h1
            style={{
              color: "white",
              fontSize: "5rem",
              textAlign: "center",
              marginTop:"-25rem",
              marginBottom:"18rem",

              fontFamily: "Georgia, serif",
            }}
          >
            Products
          </h1>
       </span>
      </div>
      <div className="HeroBg">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src="media/farm2-home-icon1.png"
                style={{
                  margin: "6rem 0rem -6rem 8rem ",
                  height: "35%",
                  width: "35%",
                }}
              ></img>
              <h3
                style={{
                  marginBottom: "2rem",
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                Quantum perro
              </h3>
              <p
                style={{
                  textAlign: "center",
                  color: "#c9d1cc",
                  fontSize: "1rem",
                }}
              >
                Duis aute irure dolor in reprehenderit in
                <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla
                pariatur.
              </p>
            </div>
            <div className="col-4">
              <img
                src="media/farm2-home-icon3.png"
                style={{
                  margin: "6rem 0rem -6rem 8rem ",
                  height: "35%",
                  width: "35%",
                }}
              ></img>
              <h3
                style={{
                  marginBottom: "2rem",
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                Quantum perro
              </h3>
              <p
                style={{
                  textAlign: "center",
                  color: "#c9d1cc",
                  fontSize: "1rem",
                }}
              >
                Duis aute irure dolor in reprehenderit in
                <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla
                pariatur.
              </p>
            </div>
            <div className="col-4">
              <img
                src="media/farm2-home-icon4.png"
                style={{
                  margin: "6rem 0rem -6rem 8rem ",
                  height: "35%",
                  width: "35%",
                }}
              ></img>
              <h3
                style={{
                  marginBottom: "2rem",
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                Quantum perro
              </h3>
              <p
                style={{
                  textAlign: "center",
                  color: "#c9d1cc",
                  fontSize: "1rem",
                }}
              >
                Duis aute irure dolor in reprehenderit in
                <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla
                pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;