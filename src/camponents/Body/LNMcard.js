import React from "react";
import "./body.css";
import AEIOU from "../../images/lnm.jfif";
import { NavLink } from "react-router-dom";

const LNMcard = () => {
  return (
    <div>
      <section className="body-section">
        <div class="card1">
          <img className="card1-img" src={AEIOU} alt="AEIOU"/>
          <div>
            <h2 className="card1-h2">
            Learning Needs Matrix
            </h2>
            <h3 className="card1-h3">Descripstion</h3>
            <p className="card1-p">
              this is a Learning Needs Matrix Canvas which contain multiple phases you need to cahnge by every version of projetc.
            </p>
            <NavLink to="/lnm"><button className="card1-button">Create</button></NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LNMcard