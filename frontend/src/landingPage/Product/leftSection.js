import React from "react";
import {Link} from "react-router-dom";

function leftSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL } style={{height:"25rem",width:"25rem",marginLeft:"8rem",marginTop:"9rem"}}/>
        </div>
        <div className="col-6 p-5 mt-5" id="leftSection">
          <h1 style={{fontSize:"3rem"}}><b>{productName}</b></h1>
          <p style={{fontSize:"1.5rem"}}><b>{productDesription}</b></p>
          <div>
            <Link to={learnMore} style={{ marginLeft: "5px",marginTop:"100px" }}>
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftSection;