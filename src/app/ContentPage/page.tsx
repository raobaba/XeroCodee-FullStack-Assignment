import React from "react";
import "../../styles/ContentPage.scss";
import { FaCircleDot } from "react-icons/fa6";

function ContentPage() {
  return (
    <div className="ContentPage">
      <div className="circle-container">
        <div className="big-circle">
          <FaCircleDot size={30}/>
        </div>
        <div className="vertical"></div>

        <div className="big-circle">
          <FaCircleDot size={30}/>
        </div>
        <div className="vertical"></div>

        <div className="big-circle">
          <FaCircleDot size={30}/>
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
