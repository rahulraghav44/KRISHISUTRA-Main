import React from "react";

function CreateDetail() {
  return (
    <>
      <div className="detail">
        <div className="container">
          <div className="row">
            <h2
              style={{
                color: "#ebd1c8",
                textAlign: "center",
                marginTop: "8rem",
                fontSize: "50px",
                fontFamily: "Georgia, serif",
              }}
            >
              <b>
                {" "}
                <p>
                  Fell free to contact us.
                  <br />
                  We are here to answer
                  <br /> all your questions
                </p>
              </b>
            </h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h5
                style={{
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",
                  fontFamily: "Georgia, serif",
                  textDecoration: "underline",
                }}
              >
                {" "}
                Monday-Saturday
              </h5>
              <h2
                style={{
                  color: "#508D4E",
                  textAlign: "center",
                  marginTop: "2rem",
                  fontFamily: "Georgia, serif",
                  fontSize: "40px",
                }}
              >
                8am - 4pm
              </h2>
            </div>
            <div className="col-6">
              <span style={{ borderBottom: "  1rem solid white " }}>
                <h5
                  style={{
                    color: "#ebd1c8",
                    textAlign: "center",
                    marginTop: "8rem",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {" "}
                  Sunday
                </h5>
              </span>
              <h2
                style={{
                  color: "#508D4E",
                  textAlign: "center",
                  marginTop: "2rem",
                  fontFamily: "Georgia, serif",
                  fontSize: "40px",
                }}
              >
                9am - 3am
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                src="media/message.png "
                style={{ margin: "6rem 0rem -5rem 11rem " }}
              ></img>
              <h3
                style={{
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                Call us
              </h3>
              <h4 style={{ textAlign: "center", color: "#ebd1c8" }}>999999999</h4>
            </div>
            <div className="col-4">
              <img
                src="media/arrow.png"
                style={{ margin: "6rem 0rem -5rem 10rem " }}
              ></img>
              <h3
                style={{
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",

                  fontFamily: "Georgia, serif",
                }}
              >
                Address
              </h3>
              <h4 style={{ textAlign: "center", color: "#ebd1c8" }}>
                Level 13, 2 Elizabeth St,
                <br />
                Melbourne, Victoria 3000,
                <br />
                Australia
              </h4>
            </div>
            <div className="col-4">
              <img
                src="media/mail.png"
                style={{ margin: "6rem 0rem -5rem 10rem " }}
              ></img>
              <h3
                style={{
                  color: "#ebd1c8",
                  textAlign: "center",
                  marginTop: "8rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                E-mail
              </h3>
              <h4 style={{ textAlign: "center", color: "#ebd1c8" }}>
                noreply@envato.com
              </h4>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default CreateDetail;