"use client";
import React, { useState } from "react";
import "../../styles/MiddlePage.scss";
import NavPage from "../NavPage/page";
import ContentPage from "../ContentPage/page";
import ProgressBar from "../ProgressBar/page";

const MiddlePage: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const updateProgress = (newProgress: number) => {
    setProgress(newProgress);
  };
  return (
    <div className="middlepage-container">
      <div className="navpage-container">
        <NavPage />
      </div>
      <div className="middle">
        <div className="contentpage-container">
          <ContentPage updateProgress={updateProgress} />
        </div>
        <div className="progressbar-container">
          <ProgressBar percentage={progress} />
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
