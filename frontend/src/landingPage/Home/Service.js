import React from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <>
      <div className="Service mt-5">
        <div className="container mt-5">
          <h2 style={{ textAlign: "center", marginBottom: "4rem",marginRight:"6rem" }}>
            <b> OUR SERVIES</b>
          </h2>
          <div className="row mx-5">
            <div className="col-4">
              <ServiceCard
                link={"../media/farm2-home-icon1.png"}
                name={"Service"}
                description={"Lorem ipsum dolor sit amet, consing eli do eiod."}
              />
            </div>
            <div className="col-4">
              <ServiceCard
                link={"../media/farm2-home-icon2.png"}
                name={"Service"}
                description={"Lorem ipsum dolor sit amet, consing eli do eiod."}
              />
            </div>
            <div className="col-4">
              <ServiceCard
                link={"../media/farm2-home-icon3.png"}
                name={"Service"}
                description={"Lorem ipsum dolor sit amet, consing eli do eiod."}
              />
            </div>
          </div>
          <div className="row mx-5">
            <div className="col-4">
              <ServiceCard
                link={"../media/farm2-home-icon4.png"}
                name={"Service"}
                description={"Lorem ipsum dolor sit amet, consing eli do eiod."}
              />
            </div>
            <div className="col-4">
              <ServiceCard
                link={"../media/farm2-home-icon5.png"}
                name={"Service"}
                description={"Lorem ipsum dolor sit amet, consing eli do eiod."}
              />
            </div>
            <div className="col-4">
              <ServiceCard
                link={"../media/farm2-home-icon6.png"}
                name={"Service"}
                description={"Lorem ipsum dolor sit amet, consing eli do eiod."}
              />
            </div>
          </div>
         
          
        </div>
      </div>
    </>
  );
}

export default Service;