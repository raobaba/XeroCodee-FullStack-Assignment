import React from "react";
import Logo from "../../assets/logo-1f6eb176.png";
import '../../styles/Footer.scss';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <Image src={Logo} alt="logo" width={40}/>
            <p>
              You get just what you need <br /> to run your cloud workloads <br /> --no more, no
              less. Deploy <br /> from our single pane of glass, manage them with ease <br />
              and scale up as fast as your workload grows
            </p>
            <div className="social-icons">
              <FaLinkedin size={25} />
              <FaGithub size={25}/>
              <FaEnvelope size={25}/>
            </div>
          </div>
          <div className="footer-section">
            <h2 className="our-link" >Our Links</h2>
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
              <li><a href="#">Network Infrastructure</a></li>
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
