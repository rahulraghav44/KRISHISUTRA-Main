import React from 'react';

function Hero () {
  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  };
    return ( 
        <div>
        <h1 style={headingStyle}>Agricultural Seasons in India</h1>
          <p style={{fontSize:"15px",margin:"10px"}}>
          <b>India has three main cropping seasons: Rabi, Kharif, and Zaid. Each season has distinct climatic conditions that determine the types of crops grown. Understanding their water, pH, and temperature requirements helps optimize cultivation.
          </b></p>
    
        </div>
     );
}

export default  Hero;