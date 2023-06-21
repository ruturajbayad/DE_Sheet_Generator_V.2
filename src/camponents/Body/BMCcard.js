import React from "react";
import "./body.css";
import AEIOU from "../../images/bmc.jfif";
import { NavLink } from "react-router-dom";

const BMCcard = () => {
  return (
    <div>
      <section className="body-section">
        <div class="card1">
          <img className="card1-img" src={AEIOU} alt="AEIOU"/>
          <div>
            <h2 className="card1-h2">
            Business Model Canvas
            </h2>
            <h3 className="card1-h3">Descripstion</h3>
            <p className="card1-p">
              this is a Bussiness Model Canvas which contain  Key Partners,Key Activities,Key Activities etc.
            </p>
            <NavLink to="/bmc"><button className="card1-button">Create</button></NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BMCcard