import React from "react";
import "./body.css";
import AEIOU from "../../images/aeiou1.jfif";
import { NavLink } from "react-router-dom";

const MainBody = () => {
  return (
    <div>
      <section className="body-section">
        <div class="card1">
          <img className="card1-img" src={AEIOU} alt="AEIOU"/>
          <div>
            <h2 className="card1-h2">
              AEIOU
            </h2>
            <h3 className="card1-h3">Descripstion</h3>
            <p className="card1-p">
              this is a aeiou sheet which contain activity environments interaction objects and users 
            </p>
           <NavLink to="/aeiou"><button className="card1-button">Create</button></NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBody;
