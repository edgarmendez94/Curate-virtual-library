import React from "react";

const centerText = {
  textAlign: "center",
};

const welcomeText = {
  textDecoration: "underline",
  paddingTop: "2%",
};

const cardOne = {
  width: "18rem",
};

export default function HIW() {
  return (
    <div>
      <div style={centerText}>
        <h1 style={welcomeText}>Welcome to curate</h1>
        <br></br>
        <h3>The future of digital museums</h3>
      </div>
      <br></br>
      <div className="container-fluid" style={centerText}>
        <div className="row row-cols-2 p-1">
          <div className="card col" style={cardOne}>
            <div className="card-body">
              <h5 className="card-title">Login or Create an Account</h5>
              <p className="card-text">
                Click the buttons in the top right to get started.
              </p>
            </div>
          </div>
          <div className="card col" style={cardOne}>
            <div className="card-body">
              <h5 className="card-title">Upload Your Submission</h5>
              <p className="card-text">
                Share what you think belongs in the musuem by uploading an image
                under the "Your Submission" tab.
              </p>
            </div>
          </div>
          <div className="card col" style={cardOne}>
            <div className="card-body">
              <h5 className="card-title">Cast Your Vote!</h5>
              <p className="card-text">
                Navigate to the "Vote Here" tab to vote on the two pictures of
                the day
              </p>
            </div>
          </div>
          <div className="card col" style={cardOne}>
            <div className="card-body">
              <h5 className="card-title">
                See the Digital Virtual Musuem on Display
              </h5>
              <p className="card-text">
                Click on the "Virtual Library" tab to enter the musem and see
                the curated content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <section>
<p>
  Curate is the worlds first Virtual Museum platform where users hold the
  power in deciding what gets displayed in Curate's gallery. All users
  will have votes that they can cast on Images that other users have
  provided and images that garner more votes then other user provided
  Images will be displayed On Curates main gallery for all the world to
  see.
</p>
</section> */}