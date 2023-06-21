import React from "react";
import "./body.css";
import AEIOU from "../../images/emc.jfif";
import { NavLink } from "react-router-dom";

const EMCcard = () => {
  return (
    <div>
    <section className="body-section">
      <div class="card1">
        <img className="card1-img" src={AEIOU} alt="AEIOU"/>
        <div>
          <h2 className="card1-h2">
          Empathy Mapping Canvas
          </h2>
          <h3 className="card1-h3">Descripstion</h3>
          <p className="card1-p">
            this is a Empathy Mapping Canvas which contain  USER, STAKEHOLDERS, ACTIVITIES, STORY BOARDING.
          </p>
          <NavLink to="/emc"><button className="card1-button">Create</button></NavLink>
        </div>
      </div>
    </section>
  </div>
  )
}

export default EMCcard