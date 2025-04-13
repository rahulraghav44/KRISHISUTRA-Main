import React from "react";
import Hero from "./Hero";
import "./Product.css";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

import CropGraph from "./cropVisualizer";
import MapApp from "../3DModel/MapApp";

function ProductPage() {
  // const [showGraph, setShowGraph] = useState(false);

  // const handleGenerateClick = () => {
  //   setShowGraph(true);
  // };
  return (
    <>
      <Hero />
      {/* <div>
      <button onClick={handleGenerateClick}>Generate Graph</button>
      
      {showGraph && <PlotDisplay />}
      </div> */}
      
        <CropGraph />
        <MapApp />

      <LeftSection
        imageURL="media/summer.jpg"
        productName="Summer"
        productDesription=" The Rabi season begins in winter, with crops sown between October and December and harvested from March to May. These crops require a cool climate for germination and growth, followed by warmer conditions for ripening. Since this season falls during the dry months, irrigation plays a crucial role in farming. Some of the major crops grown in this season include wheat, barley, mustard, peas, and gram. The northern states of India, such as Punjab, Haryana, and Uttar Pradesh, are the major producers of Rabi crops."
        learnMore="/blogs"
      />
      <RightSection
        imageURL="media/monsoon-crops.webp"
        productName="Monsoon"
        productDesription="The Kharif season coincides with the monsoon, as crops are sown between June and July, relying on abundant rainfall. These crops are harvested from September to October. Kharif crops require warm and humid conditions for their growth, making them highly dependent on monsoon patterns. Major crops of this season include rice, maize, jowar, bajra, cotton, and soybean. The eastern and southern states, such as West Bengal, Odisha, Andhra Pradesh, and Maharashtra, are the leading producers of Kharif crops."
        learnMore="/blogs"
      />
      <LeftSection
        imageURL="media/winter.jpg"
        productName="Winter"
        productDesription="The Rabi season begins in winter, with crops sown between October and December and harvested from March to May. These crops require a cool climate for germination and growth, followed by warmer conditions for ripening. Since this season falls during the dry months, irrigation plays a crucial role in farming. Some of the major crops grown in this season include wheat, barley, mustard, peas, and gram. The northern states of India, such as Punjab, Haryana, and Uttar Pradesh, are the major producers of Rabi crops."
        learnMore="/blogs"
      />
      {/* <RightSection
        imageURL="media/pears.png"
        productName="Pears"
        productDesription="Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit.
Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo pretium."
        learnMore=""
      /> */}
      
      <div className="container">
        <div className="row p-5 m-5" >
          <img style={{height:"150%"}} src="media/farm2-sep1.png"></img>
        </div>
      </div>
    </>
    
  );
}

export default ProductPage;