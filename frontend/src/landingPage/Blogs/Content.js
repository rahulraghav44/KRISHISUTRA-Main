import React from 'react';
import Rabi from "../Blogs/Rabi";
import Kharif from './Kharif';
import Zaid from './Zaid';

function Content() {
    const containerStyle = {
        width: "80%",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        padding: "20px",
      };
    
  return (
    <div className="container" style={containerStyle}>
    
     
      {/* Rabi Season */}
        <Rabi />

      {/* Kharif Season */}
        <Kharif />

      {/* Zaid Season */}
       <Zaid />

    </div>
  );
};



export default Content;