"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/ProgressBar.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage: initialPercentage }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  console.log(progress)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && progress < 100) {
            const interval = setInterval(() => {
              setProgress((prevProgress) =>
                prevProgress >= 100 ? 100 : prevProgress + 1
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
  }, [progress]);

  return (
    <div className="ProgressBar">
      <div className="progress-content">
        <div className="towards-xerocodee">
          <h1 className="text-xl font-bold">Your Progress</h1>
          <p className="text-sm">Towards XeroCodee</p>
        </div>
        <div className="progress">
          <CircularProgressbar
            value={initialPercentage}
            text={`${initialPercentage}%`}
            strokeWidth={15}
            styles={{
              path: {
                stroke: "#0D64DE",
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.10s ease 0s",
              },
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
          <button className="border rounded-md text-sm caret-violet-400">
            View Details
          </button>
        </div>
        <div className="side-box w-full h-3/5 mt-10">
          <div className="side h-1/4 mt-5">
            <p>Step 1</p>
            <div className="box-box box-one flex justify-between mt-1">
              <div className="ml-3 mt-2">
                <h2>AWS</h2>
                <p>Status:{initialPercentage >= 40 ? 'Complete' : 'Pending'}</p>
              </div>
              <div className="flex mt-3">
                <FaAws className="white" size={20} />
                <BsThreeDotsVertical className="col-grey" size={30} />
              </div>
            </div>
          </div>
          <div className="side h-1/4 mt-10">
            <p>Step 2</p>
            <div className="box-box box-two flex justify-between mt-1">
              <div className="ml-3 mt-2">
                <h2>Github</h2>
                <p>Status:{initialPercentage >= 80 ? 'Complete' : 'Pending'}</p>
              </div>
              <div className="flex mt-3">
                <SiGitlab className="white text-green-800" size={20} />
                <BsThreeDotsVertical className="col-grey" size={30} />
              </div>
            </div>
          </div>
          <div className="side h-1/4 mt-10">
            <p>Step 3</p>
            <div className="box-box box-three flex justify-between mt-1">
              <div className="ml-3 mt-2">
                <h2>MongoDB</h2>
                <p>Status: {initialPercentage === 100 ? 'Complete' : 'Pending'}</p>
              </div>
              {/* className="text-green-800" */}
              <div className="flex mt-3">
                <SiMongodb className="white text-green-800" size={20} />
                <BsThreeDotsVertical className="col-grey mb-5" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
