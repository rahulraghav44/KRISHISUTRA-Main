import React from "react";
import Card from "./card";

function Team() {
  return (
    <>
      
      <div className="container">
        <div className="title  mb-5" >
            <img style={{width:"45%",height:"30%"}} src="../media/Meetourteam.png"></img>
        </div>
        <div className="row ">
          <div className="col-1"></div>
          
          <Card
            Name={"Rakshit"}
            link={"../media/uncle.jpg"}
            descr={"hi am rakshit "}
            Color={{backgroundColor:"#243f32"}}

          />
          <Card 
            Name={"Rahul"}
            link={"../media/uncle.jpg"}
            descr={"hi am rakshit "}
            Color={{backgroundColor:"#365341"}}

          />
          <Card
            Name={"Shashank"}
            link={"../media/uncle.jpg"}
            descr={"hi am rakshit "}
            Color={{backgroundColor:"#3e5945"}}

          />

          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
