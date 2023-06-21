import React from "react";
import "./body.css";
import AEIOU from "../../images/pdc.jfif";
import { NavLink } from "react-router-dom";

const PDCcard = () => {
  return (
    <div>
    <section className="body-section">
      <div class="card1" style={{width:'104%'}}>
        <img className="card1-img" src={AEIOU} alt="AEIOU"/>
        <div>
          <h2 className="card1-h2">
          Product Development Canvas
          </h2>
          <h3 className="card1-h3">Descripstion</h3>
          <p className="card1-p">
            this is a Product Development Canvas whitch contain  Purpose, Product Experience, Product Features etc.
, STORY BOARDING.
          </p>
          <NavLink to="/pdc"><button className="card1-button">Create</button></NavLink>
        </div>
      </div>
    </section>
  </div>
  )
}

export default PDCcard