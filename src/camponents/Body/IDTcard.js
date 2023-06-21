import React from "react";
import "./body.css";
import AEIOU from "../../images/idt.jfif";
import { NavLink } from "react-router-dom";

const IDTcard = () => {
  return (
    <div>
      <section className="body-section">
        <div class="card1">
          <img className="card1-img" src={AEIOU} alt="AEIOU"/>
          <div>
            <h2 className="card1-h2">
            Ideation Canvas 
            </h2>
            <h3 className="card1-h3">Descripstion</h3>
            <p className="card1-p">
              this is a Ideation Canvas which contain  Key Partners,Key Activities,Key Activities etc.
            </p>
            <NavLink to="/ideation"><button className="card1-button">Create</button></NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IDTcard