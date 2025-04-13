
import React from "react";

function ResultsPage({ cropResults, onBack, onDistrictClick }) {
  return (
    <div style={{ position:"relative",padding: "20px", backgroundColor: "#2f9b63", minHeight: "100vh", width:'150vh',margin:"0vh 5vh 10vh 20vh" }}>
      <h2 style={{ marginBottom: "20px",textAlign:"center" }}>🌾 District-wise Crop Predictions</h2>
      
      <button
        onClick={onBack}
        style={{
          height:"8vh",
          width:"18vh",
          padding:"2vh",
          position: 'absolute', top: 0, left: -20
        
        }}
        
      >
        🔙 Back to Map
      </button>

      <div
        style={{
          
          display: "flex",
          flexWrap: "wrap",
          paddingLeft:"5vh",
          gap: "30px",
          justifyContent: "flex-Start",
        }}
      >
        {cropResults.length > 0 ? ( cropResults.map((dist, idx) => (
          <div
            key={idx}
            onClick={() => onDistrictClick(dist)}
            style={{
              textAlign:"center",
              background: "#a2dc7c",
              borderRadius: "10px",
              width: "250px",
              height: "130px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
            }}
          >
            <h3 style={{ margin: "0 0 10px" ,color: "#555",}}>{dist.district}</h3>
            <p style={{ margin: "0", fontSize: "14px",color: "#555", }}>
              {dist.crops.length} crops predicted
            </p>
            <p style={{ margin: "0", fontSize: "14px",color: "#555", }}>
              {dist.hydrological.length} Water Sources
            </p>
            <p style={{ fontSize: "12px", color: "#555", marginTop: "5px" }}>
              Click to view in 3D 🌽
            </p>
          </div>
        )))
        :(
          <h3>Data is not <strong>AVAILABLE</strong> right now </h3>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
