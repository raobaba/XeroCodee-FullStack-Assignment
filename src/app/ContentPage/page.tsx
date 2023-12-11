import React from "react";
import "../../styles/ContentPage.scss";

function ContentPage() {
  return (
    <div className="ContentPage">
      <div className="circle-container">
        <div className="big-circle">
          <div className="small-circle"></div>
        </div>
        <div className="vertical"></div>

        <div className="big-circle">
          <div className="small-circle"></div>
        </div>
        <div className="vertical"></div>

        <div className="big-circle">
          <div className="small-circle"></div>
        </div>
        <div className="vertical"></div>
      </div>
      <div className="option-container">
        <div className="step">
          <div className="step-number">
            <h3>Step 1</h3>
            <p>Connect to Cloud</p>
          </div>
          <div className="box-option">
            <div className="icon-container"></div>
            <div className="icon-container"></div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>Step 2</h3>
            <p>Connect to Source Code</p>
          </div>
          <div className="box-option">
            <div className="icon-container"></div>
            <div className="icon-container"></div>
            <div className="icon-container"></div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>Step 3</h3>
            <p>Connect to Database</p>
          </div>
          <div className="box-option">
            <div className="icon-container"></div>
            <div className="icon-container"></div>
            <div className="icon-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
