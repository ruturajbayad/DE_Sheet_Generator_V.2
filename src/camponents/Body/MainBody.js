import React from "react";
import "./body.css";
import Video from "../../videos/video.mp4";

const MainBody = () => {
  return (
    <div className="main">
      <section className="body-section">
        <div class="card1">
          <video className="card1-img" autoPlay loop muted src={Video} />
          <div>
            <h2 className="card1-h2">
              AEIOU
            </h2>
            <h3 className="card1-h3">Descripstion</h3>
            <p className="card1-p">
              this is a aeiou sheet which contain activity environments interaction objects and users 
            </p>
            <button className="card1-button">Create</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBody;
