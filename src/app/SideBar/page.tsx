import React from "react";
import Link from "next/link";
import "../../styles/SideBar.scss";
import { CgMenuGridR } from "react-icons/cg";
import { FiLayers } from "react-icons/fi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiCrystalCluster } from "react-icons/gi";
import { AiFillDatabase } from "react-icons/ai";
import { FaEnvira } from "react-icons/fa6";
import { GiFlowerTwirl } from "react-icons/gi";
import { PiMonitorBold } from "react-icons/pi";
import { GrShieldSecurity } from "react-icons/gr";
import { MdOutlineWebhook } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function SideBar() {
  return (
    <div className="CustomSideBar">
      <div className="sidebar-content">
        <Link href="/xerocodee">
          <div className="sidebar-item">
            <CgMenuGridR className='icon' size={25} />
            <p className="side-text">XeroCodee</p>
          </div>
        </Link>
        <Link href="/buildercenter">
          <div className="sidebar-item">
            <FiLayers className='icon' size={25} />
            <p className="side-text">Builder Center</p>
          </div>
        </Link>
        <Link href="/serviceboard">
          <div className="sidebar-item">
            <MdOutlineMiscellaneousServices className='icon' size={25} />
            <p className="side-text">Service Board</p>
          </div>
        </Link>
        <Link href="/cluster">
          <div className="sidebar-item">
            <GiCrystalCluster className='icon' size={25} />
            <p className="side-text">Cluster</p>
          </div>
        </Link>
        <Link href="/database">
          <div className="sidebar-item">
            <AiFillDatabase className='icon' size={25} />
            <p className="side-text">Database</p>
          </div>
        </Link>
        <Link href="/environment">
          <div className="sidebar-item">
            <FaEnvira className='icon' size={25} />
            <p className="side-text">Environment</p>
          </div>
        </Link>
        <Link href="/workflow">
          <div className="sidebar-item">
            <GiFlowerTwirl className='icon' size={25} />
            <p className="side-text">Workflow</p>
          </div>
        </Link>
        <Link href="/monitoring">
          <div className="sidebar-item">
            <PiMonitorBold className='icon' size={25} />
            <p className="side-text">Monitoring</p>
          </div>
        </Link>
        <Link href="/security">
          <div className="sidebar-item">
            <GrShieldSecurity className='icon' size={25} />
            <p className="side-text">Security</p>
          </div>
        </Link>
        <Link href="/webhooks">
          <div className="sidebar-item">
            <MdOutlineWebhook className='icon' size={25} />
            <p className="side-text">WebHooks</p>
          </div>
        </Link>
        <Link href="/logerror">
          <div className="sidebar-item">
            <AiOutlineMenuUnfold className='icon' size={25} />
            <p className="side-text">Log Error</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
