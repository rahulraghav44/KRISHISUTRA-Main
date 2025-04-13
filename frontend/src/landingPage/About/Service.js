import React from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <>
      <div className="Service">
        <div className="container">
          <h3 style={{ textAlign: "center", marginBottom: "4rem",marginRight:"6rem" }}>
            Ut ultricies imperdiet sodales. Aliquam <br />
            fringilla aliquam elementum
          </h3>
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
          <div className="row mt-5 fw-bold">
            <div className="col-6 p-5 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam.
              </p>
            </div>
            <div className="col-6 p-5 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fug.
              </p>
              <ul>
                <li className="p-2">
                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit
                </li>
                <li className="p-2">
                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit
                </li>
                <li className="p-2">
                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit
                </li>
                <li className="p-2">
                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit
                </li>
              </ul>
            </div>
            
          </div>
          <div className="row">
            <img style={{height:"150%"}} src = '../media/farm2-sep1.png'></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
