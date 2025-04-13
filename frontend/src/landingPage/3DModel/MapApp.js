import React, { useState, useRef, useEffect } from "react";
import MapComponent from "./MapComponent";
import Loader from "./Loader";
import axios from "axios";
import ResultsPage from "./ResultsPage";
import FarmSim3D from "./FarmSim3D";


function MapApp() {
  const [season, setSeason] = useState("");
  const seasonRef = useRef("");
  const [cropResults, setCropResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [view, setView] = useState("map"); // "map" | "results" | "3d"
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    seasonRef.current = season; // update ref whenever season changes
  }, [season]);

  const handlePolygonDrawn = async (polygonGeoJSON) => {
    if (!seasonRef.current) {
      alert("Please select a season before drawing.");
      return;
    }

    try {
      setLoading(true); // Start loader
      const res = await axios.post("http://localhost:8000/get-crops-in-area", {
        polygon: polygonGeoJSON,
        season: seasonRef.current,
      });
      console.log("Received crop data:", res.data); // 👈 Ensure this logs
      setCropResults(res.data.tiles); // 👈 should set an array of districts
      setView("results");
    } catch (error) {
      console.error("Error fetching crop data:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div>
      <div style={{ margin:"10vh 5vh 0vh 20vh",padding: "10px", width: "150vh", background: "#06777a" }}>
        <label>Select Season: </label>
        <select onChange={(e) => setSeason(e.target.value)} value={season}>
          <option value="">--Select--</option>
          <option value="Summer">Summer</option>
          <option value="Monsoon">Monsoon</option>
          <option value="Winter">Winter</option>
        </select>
      </div>
      {view === "map" && <MapComponent onPolygonDrawn={handlePolygonDrawn} cropResults={cropResults}/>}
      {loading && <Loader />}

      {view === "results" && (
        <ResultsPage
          cropResults={cropResults}
          onBack={() => {
            setView("map");
            setCropResults([]);
          }}
          onDistrictClick={(district) => {
            setSelectedDistrict(district);
            setView("3d");
          }}
        />
      )}

      {view === "3d" && selectedDistrict && (
        <FarmSim3D
          districtData={selectedDistrict}
          onBack={() => {
            setSelectedDistrict(null);
            setView("results");
          }}
        />
      )}
    </div>
  );
};

export default MapApp;
