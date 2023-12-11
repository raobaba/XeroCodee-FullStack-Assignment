"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/ProgressBar.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && percentage < 100) {
            const interval = setInterval(() => {
              setPercentage((prevPercentage) =>
                prevPercentage >= 100 ? 100 : prevPercentage + 1
              );
            }, 50);
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="ProgressBar">
      <div className="progress-content">
        <div className="towards-xerocodee">
          <h2>Your Progress</h2>
          <p>Towards XeroCodee</p>
        </div>
        <div ref={containerRef} className="progress">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={15}
            styles={{
              path: {
                stroke: "#0D64DE",
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.10s ease 0s",
              },
              // Adjust the trail's size
              trail: {
                stroke: "#d6d6d6",
                strokeLinecap: "butt",
              },
              text: {
                fill: "#3f51b5",
                fontSize: "16px",
              },
            }}
          />
        </div>
        <div className="text-center mt-5">
          <button className="border rounded-md text-sm caret-violet-400">View Details</button>
        </div>
        <div className="side-box w-full h-3/5 mt-10">
          <div className="side h-1/4 mt-5">
            <p>Step 1</p>
            <div className="box-box box-one flex justify-between mt-1">
              <div className="ml-3">
                <h2>AWS</h2>
                <p>Status: complete</p>
              </div>
              <div className="flex mt-3">
                <FaAws className="white" size={20}/>
                <BsThreeDotsVertical className="col-grey" size={30}/>
              </div>
            </div>
          </div>
          <div className="side h-1/4 mt-10">
            <p>Step 2</p>
            <div className="box-box box-two flex justify-between mt-1">
              <div  className="ml-3">
                <h2>Github</h2>
                <p>Status:complete</p>
              </div>
              <div className="flex mt-3">
                <SiGitlab className="white" size={20}/>
                <BsThreeDotsVertical className="col-grey" size={30}/>
              </div>
            </div>
          </div>
          <div className="side h-1/4 mt-10">
            <p>Step 3</p>
            <div className="box-box box-three flex justify-between mt-1">
              <div  className="ml-3">
                <h2>MongoDB</h2>
                <p>Status: Pending</p>
              </div>
              <div className="flex mt-3">
                <SiMongodb className="white" size={20}/>
                <BsThreeDotsVertical className="col-grey" size={30}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
