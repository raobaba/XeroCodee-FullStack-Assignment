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

  const sidebarItems = [
    { href: "/DashPage/xerocodee", icon: <CgMenuGridR size={25} />, text: "XeroCodee" },
    { href: "/buildercenter", icon: <FiLayers size={25} />, text: "Builder Center" },
    { href: "/serviceboard", icon: <MdOutlineMiscellaneousServices size={25} />, text: "Service Board" },
    { href: "/cluster", icon: <GiCrystalCluster size={25} />, text: "Cluster" },
    { href: "/database", icon: <AiFillDatabase size={25} />, text: "Database" },
    { href: "/environment", icon: <FaEnvira size={25} />, text: "Environment" },
    { href: "/workflow", icon: <GiFlowerTwirl size={25} />, text: "Workflow" },
    { href: "/monitoring", icon: <PiMonitorBold size={25} />, text: "Monitoring" },
    { href: "/security", icon: <GrShieldSecurity size={25} />, text: "Security" },
    { href: "/webhooks", icon: <MdOutlineWebhook size={25} />, text: "WebHooks" },
    { href: "/logerror", icon: <AiOutlineMenuUnfold size={25} />, text: "Log Error" },
  ];
  
  function SideBar() {
    const activeItem = "/DashPage/xerocodee";
    return (
      <div className="CustomSideBar">
      <div className="sidebar-content">
        {sidebarItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className={`sidebar-item ${item.href === activeItem ? 'active' : ''}`}>
              {item.icon}
              <p className="side-text">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
  }
  
  export default SideBar