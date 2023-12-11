import React from "react";
import Image from "next/image";
import "../../styles/Header.scss";
import Logo from "../../assets/logo-1f6eb176.png";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import { CiSettings, CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left-section">
          <div className="xero-logo">
            <Image src={Logo} alt="logo" width={40} />
            <h4 className="xero-codee-text">eroCodee.</h4>
          </div>
          <div className="input-box">
            <input type="text" placeholder="search..." />
            <div className="search-box">
              <CiSearch style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className="header-right-section">
          <div className="plan-section">
            {" "}
            <div className="plan">
              <MdCardGiftcard size={23} />
            </div>{" "}
            <p className="upgrad-user">upgrad plan</p>
          </div>
          <div className="notification-section">
            <IoIosNotificationsOutline size={25} />
          </div>
          <div className="inbox-section">
            <MdForwardToInbox size={25} />
          </div>
          <div className="setting-section">
            <CiSettings size={25} />
          </div>
          <div className="user-section">
            <p className="upgrad-user">usename</p>
            <div className="profile-section">
              <FaRegUser size={20} />
            </div>
          </div>
        </div>
        <div className="menu-bar-section">
          <TbMenuDeep size={39} />
        </div>
      </div>
    </div>
  );
}

export default Header;
