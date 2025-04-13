import React, { useState, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "https://esm.sh/three-spritetext";

const CropVisualizer = () => {
  const [district, setDistrict] = useState("");
  const [season, setSeason] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const fgRef = useRef(null);

  const districts = ["Agra", "Bareilly", "Gorakhpur", "Jhansi", "Kanpur", "Lucknow", "Meerut", "Prayagraj", "Varanasi"];
  const seasons = ["Summer", "Monsoon", "Winter"];

  const fetchPredictions = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ district, season }),
      });

      const data = await response.json();
      console.log("API Response:", data.predictions);

      if (!Array.isArray(data.predictions)) {
        console.error("Invalid API response format.");
        return;
      }

      setPredictions(data.predictions);

      const nodes = [];
      const links = [];

      data.predictions.forEach((crop, index) => {
        const predictedCrop = crop["Predicted Crop"];
        const compatibleCrop = crop["Compatible Crops"];

        if (!nodes.some((node) => node.id === predictedCrop)) {
          nodes.push({ id: predictedCrop, group: index });
        }

        if (!nodes.some((node) => node.id === compatibleCrop)) {
          nodes.push({ id: compatibleCrop, group: index + 1 });
        }

        links.push({ source: predictedCrop, target: compatibleCrop });
      });

      setGraphData({ nodes, links });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2>🌾 3D Crop Compatibility Visualization</h2>

      <div style={{ marginBottom: "10px" }}>
        <label><strong>Choose District:</strong> </label>
        <select value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">Select</option>
          {districts.map((d, index) => (
            <option key={index} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label><strong>Choose Season:</strong> </label>
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="">Select</option>
          {seasons.map((s, index) => (
            <option key={index} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button
        onClick={fetchPredictions}
        // style={{
        //   padding: "10px 20px",
        //   backgroundColor: "#28a745",
        //   color: "white",
        //   border: "none",
        //   cursor: "pointer",
        //   borderRadius: "5px",
        //   fontSize: "16px",
        // }}
      >
        Predict Crops
      </button>

      {predictions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>🌾 Predicted Crops & Compatible Crops:</h3>
          <table
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "60%",
              border: "1px solid black",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "10px", border: "1px solid black" }}>Predicted Crop</th>
                <th style={{ padding: "10px", border: "1px solid black" }}>Compatible Crops</th>
                <th style={{ padding: "10px", border: "1px solid black" }}>Water Requirement (mm per sq. meter)</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((crop, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", border: "1px solid black" }}>{crop["Predicted Crop"]}</td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>{crop["Compatible Crops"]}</td>
                  <td style={{ padding: "10px", border: "1px solid black" }}>{crop["Water Requirement"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 3D Visualization with Fixed Width */}
      {graphData.nodes.length > 0 && (
        <div style={{
          width: "75vw",
          height: "500px",
          margin: "20px auto",
          border: "2px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          overflow: "hidden"
        }}>
          <ForceGraph3D
            ref={fgRef}
            graphData={graphData}
            nodeAutoColorBy="group"
            linkWidth={2}
            nodeLabel="id"
            nodeThreeObject={node => {
              const sprite = new SpriteText(node.id);
              sprite.color = node.color;
              sprite.textHeight = 6;
              return sprite;
            }}
          
          />
        </div>
      )}
    </div>
  );
};

export default CropVisualizer;
