
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";

function DrawControl({ onDraw }) {
  const map = useMap();
  const drawControlRef = useRef(null);

  useEffect(() => {
    if (!map?.getContainer || drawControlRef.current) return;

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        rectangle: false,
        circle: false,
        circlemarker: false,
        marker: false,
        polyline: false,
      },
      edit: {
        featureGroup: drawnItems,
      },
    });

    map.addControl(drawControl);
    drawControlRef.current = drawControl;

    map.on("draw:created", function (e) {
      const layer = e.layer;
      drawnItems.addLayer(layer);
      const geojson = layer.toGeoJSON();
      if (onDraw) {
        onDraw(geojson.geometry);
      }
    });
  }, [map, onDraw]);

  return null;
}


function DistrictLayer({ cropResults }){
  const map = useMap();

  useEffect(() => {
    if (!map || !cropResults?.length) return;

    // Remove previous layers
    map.eachLayer((layer) => {
      if (layer.options && layer.options.isDistrictLayer) {
        map.removeLayer(layer);
      }
    });

    cropResults.forEach((district) => {
      const geoLayer = L.geoJSON(district.geometry, {
        style: {
          color: "#2e7d32",
          fillColor: "#a5d6a7",
          fillOpacity: 0.5,
          weight: 1,
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup(
            `<strong>${district.district}</strong><br/>${district.crops
              .map(
                (c) =>
                  `🌾 <b>${c.predicted_crop}</b><br/>Compatible: ${c.compatible_crop}<br/>Water: ${c.water_requirement}mm`
              )
              .join("<hr/>")}`
          );
        },
      });
    
      geoLayer.addTo(map);
    });
    
    
  }, [map, cropResults]);

  return null;
};

function MapComponent({ onPolygonDrawn, cropResults }){
  return (
    <MapContainer
    center={[26.85, 80.95]} // Lucknow coordinates, central UP
    zoom={7}
    maxBounds={[
      [23.5, 77],   // southwest bound of UP
      [30.5, 85]    // northeast bound of UP
    ]}
    style={{ height: "85vh", width: "150vh",margin:"0vh 5vh 10vh 20vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {!cropResults?.length && <DrawControl onDraw={onPolygonDrawn} />}
      {cropResults?.length > 0 && <DistrictLayer cropResults={cropResults} />}
    </MapContainer>
  );
};

export default MapComponent;

