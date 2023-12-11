import React from "react";
import "../../styles/ContentPage.scss";
import GoogleCloud from '../../assets/google-cloud.png'
import Image from "next/image";
import { FaCircleDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdSync } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

interface ContentPageProps {
  updateProgress: (progress: number) => void;
}
const ContentPage: React.FC<ContentPageProps> = ({ updateProgress }) => {
  const handleIconClick = (stepNumber: number) => {
    let progress = 0;
    if (stepNumber === 1) {
      progress = 40;
    } else if (stepNumber === 2) {
      progress = 80;
    } else if (stepNumber === 3) {
      progress = 100;
    }
   console.log(progress)
    updateProgress(progress);
  };
  return (
    <div className="ContentPage">
      <div className="circle-container">
        <div className="big-circle">
          <FaCircleDot size={30} className="text-green-800" />
        </div>
        <div className="vertical"></div>

        <div className="big-circle">
          <FaCircleDot size={30} className="text-green-800" />
        </div>
        <div className="vertical"></div>

        <div className="big-circle">
          <FaCircleDot size={30} className="text-green-800" />
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
            <div onClick={() => handleIconClick(1)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    AWS
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-20">
                <FaAws size={55} />
              </div>
            </div>
            <div onClick={() => handleIconClick(1)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    GCP
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-20">
                <Image src={GoogleCloud} alt="cloud" className="w-14 h-12 mt-1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>Step 2</h3>
            <p>Connect to Source Code</p>
          </div>
          <div className="box-option">
            <div onClick={() => handleIconClick(2)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-18">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    Github
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-16">
                <FaGithub size={45} />
              </div>
            </div>
            <div onClick={() => handleIconClick(2)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    Gitlab
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-20">
                <FaGitlab size={45} />
              </div>
            </div>
            <div onClick={() => handleIconClick(2)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    Bitbucket
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-20">
                <IoLogoBitbucket size={45} className="text-red-500"/>
              </div>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>Step 3</h3>
            <p>Connect to Database</p>
          </div>
          <div className="box-option">
            <div onClick={() => handleIconClick(3)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    AWS
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-20">
                <SiMongodb size={55} />
              </div>
            </div>
            <div onClick={() => handleIconClick(3)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    Redis
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-20">
                <SiRedis size={55} />
              </div>
            </div>
            <div onClick={() => handleIconClick(3)} className="icon-container">
              <div className="h-16 mt-7 m-auto w-16">
                <div>
                  <h1 className="text-xl text-slate-950 font-bold text-center">
                    Postgresql
                  </h1>
                </div>
                <div className="flex mt-5 justify-center">
                  <GoDotFill className="back-red" />
                  <GoDotFill className="back-green" />
                  <IoMdSync />
                </div>
              </div>
              <div className="aws-icon h-16 flex justify-center m-auto w-14">
                <BiLogoPostgresql size={55} className="text-green-800"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
