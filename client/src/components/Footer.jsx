import React from "react";
import Logo from "../assets/logo-1f6eb176.png";
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={Logo} alt="logo" width={40}/>
            <p>
              You get just what you need to run your cloud workloads--no more, no
              less. Deploy from our single pane of glass, manage them with ease
              and scale up as fast as your workload grows
            </p>
            <div className="social-icons">
            <FaLinkedin />
            <FaGithub />
            <FaEnvelope />
            </div>
          </div>
          <div className="footer-section">
            <h2>Our Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#">Infrastructure Provisioning</a></li>
              <li><a href="#">Network Infrastructure Automation</a></li>
              <li><a href="#">Cost Optimization</a></li>
              <li><a href="#">Cloud Migration</a></li>
              <li><a href="#">Kubernetes at Scale</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Other Links</h2>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Cloud Migration</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Cookies Policy | Sitemap</p>
          <p>Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  