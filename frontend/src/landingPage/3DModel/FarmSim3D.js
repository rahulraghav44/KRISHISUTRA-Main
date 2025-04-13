import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";


function GeneralCrop ({ position }) {
  const { scene } = useGLTF("/models/General.glb");

  const clonedScene = scene.clone(); // ✅ fix: create unique instance

  return <primitive object={clonedScene} scale={0.5} position={position} />;
};


function Terrain () {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[45, 45]} />
      <meshStandardMaterial color="#13cc13" /> {/* soil brown */}
    </mesh>
  );
};

function WaterMarker({ position, color, name, source }){
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* <sphereGeometry args={[0.8, 32, 32]} /> */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              background: "#0000001a",
              padding: "5px",
              borderRadius: "4px",
              fontSize: "12px",
              boxShadow: "0 0 5px rgba(0,0,0,0.3)",
            }}
          >
            <b>{name}</b>
            <br />
            Type: {source}
          </div>
        </Html>
      )}
    </group>
  );
};

function FarmSim3D({ districtData, onBack }){
  const crops = districtData?.crops || [];



  const gridSize = Math.ceil(Math.sqrt(crops.length));
  const spacing = 10;

  return (
    <div style={{position:"relative", height: "80vh", width: "170vh", display: "flex" }}>
      {/* Left Info Panel */}
      <div
        style={{
          width: "400px",
          background: "#0000001a",
          padding: "15px",
          borderRight: "0.5px solid #ccc",
        }}
      >
        <button onClick={onBack}  style={{
          height:"6vh",
          width:"6vh",
          textAlign:"left",
          position: 'absolute', top: 5, left: 50
        
        }}> Back</button>
        <h3>{districtData.district}</h3>
        <ul>
          {crops.map((crop, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>
              🌾 <b>{crop.predicted_crop}</b> (Compatible:{" "}
              {crop.compatible_crop})<br />
              💧 Water: {crop.water_requirement} mm
            </li>
          ))}
        </ul>

        <div
          style={{
            position: "absolute",
            backgroundColor:"#000000b1",
            textAlign:"left",
            padding:"1vh",
            top: "0vh",
            right: "0vh",
            zIndex: 1,
            fontSize: "16px"
          }}
        >
          <h4>💧 Water Sources</h4>
          {["reservoirs", "ponds", "lakes"].map((type) => {
            const count = districtData.hydrological.filter(
              (h) => h.properties.source === type
            ).length;
            if (count === 0) return null;

            const labelMap = {
              reservoirs: "🟦 Reservoirs/Rivers",
              ponds: "🟩 Ponds",
              lakes: "🟪 lakes",
            };

            return (
              <div key={type}>
                {labelMap[type]}: <b>{count}</b>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 15, 20], fov: 65 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} intensity={1} castShadow />
        <OrbitControls />
        <Terrain />
        <color attach="background" args={['#DBEAB7']} />

        {/* General Crops */}
        {crops.map((crop, i) => {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          const x = col * spacing - ((gridSize - 1) * spacing) / 2;
          const z = row * spacing - ((gridSize - 1) * spacing) / 2;

          return <GeneralCrop key={i} cropData={crop} position={[x, 0, z]} />;
        })}

        {/* Water Sources with Hover */}
        {["reservoirs", "ponds", "lakes"].map((type, index) => {
          const entry = districtData.hydrological.find(
            (h) => h.properties.source === type
          );
          if (!entry) return null;

          const colors = {
            reservoirs: "blue",
            ponds: "green",
            lakes: "purple",
          };

          // Custom position based on hydro type
          let position = [10, 0.5, 0]; // default

          if (entry.properties.source === "reservoirs") {
            position = [10, 0.5, 8];
          } else if (entry.properties.source === "ponds") {
            position = [10, 0.5, 10];
          } else if (entry.properties.source === "lakes") {
            position = [10, 0.5, 12];
          }

          return (
            <WaterMarker
              key={type}
              position={position}
              color={colors[type]}
              name={entry.properties.name}
              source={entry.properties.source}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default FarmSim3D;
