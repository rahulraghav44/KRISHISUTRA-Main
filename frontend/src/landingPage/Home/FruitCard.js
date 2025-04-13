import React from "react";
import TempFruitCard from "./TempFruitCard";
import { Link } from "react-router-dom";

function FruitCard() {
  return (
    <>
     <div className="container mx-5">
      <div className="row" style={{marginLeft:"10px"}}>
        <div className="col" style={{margin:"-1rem 0  0  -3rem"}}>
        <TempFruitCard
        Name={"Winter"}
        link={"../media/summer.jpg"}
        descr={"Rabi Season (Winter Crops):Sown in October–December and harvested in March–May."}
        color={{ backgroundColor: "#243f32" }}
      />
        </div>
        <div className="col" style={{margin:"-1rem 0  0  -3rem"}}>
        <TempFruitCard
        Name={"Monsoon"}
        link={"../media/monsoon-crops.webp"}
        descr={"Kharif Season (Monsoon Crops): Sown in June–July (with the onset of monsoon) and harvested in September–October."}
        color={{ backgroundColor: "#243f32" }}
      />
        </div>
        <div className="col" style={{margin:"-1rem 0  0  -3rem"}}>
        <TempFruitCard
        Name={"Summer"}
        link={"../media/winter.jpg"}
        descr={"Zaid Season (Summer Crops): Grown between March–June (between Rabi and Kharif). Requires warm weather and irrigation."}
        color={{ backgroundColor: "#365341" }}
      />
        </div>
        {/* <div className="col" style={{margin:"-1rem 0  0  -3rem"}}>
        <TempFruitCard
        Name={"Winter"}
        link={"../media/apple.png"}
        descr={"seab"}
        color={{ backgroundColor: "#3e5945" }}
      />
        </div> */}
     
      </div>
      <div className="row">
        <div style={{ margin: "2rem 0 20rem 5rem" }}>
        <span style={{fontFamily:'serif',fontSize:'2rem'}}>
          To know more about these in detail click here! 
        </span>
        <span style={{ marginLeft: "18rem" }}>
         
          <Link to="/product">
            <button>read more..</button>
          </Link>
        </span>
      </div>

      </div>
     
      
      </div>
    </>
  );
}

export default FruitCard;
