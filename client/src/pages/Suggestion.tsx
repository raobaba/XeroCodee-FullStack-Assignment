import React from "react";
import '../styles/Suggestion.scss';
import HeroImage from '../assets/hero.png';

const Suggestion: React.FC = () => {
  return (
    <div className="suggestion-container">
      <div className="title-section">
        <h1>
          Don't spend a year on <br /> Kubernetes; <br /> start ahead with{" "}
          <label className="xerocodee-label">XeroCodee</label>
        </h1>
      </div>
      <div className="description-section">
        <p>
          Begin ahead of the curve with <label className="xerocodee-label">XeroCodee</label>. No need to spend a year
          crafting a Kubernetes platform. Streamline your process and focus on
          what truly matters.
        </p>
      </div>
      <div className="button-section">
        <button className="xerocodee-button">#EfficiencyWithXeroCodee</button>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
}

export default Suggestion;
