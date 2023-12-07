// Inside components/Navbar.tsx
'use-client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../assets/logo-1f6eb176.png'
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "../../styles/Navbar.scss";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowDrawer(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`MainNavbar m-auto sticky`}>
      <Link href="/">
        <div className={`Logo ${showDrawer ? "hide-logo" : ""}`}>
          <Image src={Logo} alt="logo" width={40} height={40} />
        </div>
      </Link>
      <div className="desk-navbar">
        <div className="Navbar-links">
          <Link href="/">Home</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <Link href="/SignIn" className="SignInButton">
          Sign In
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleDrawer}>
        {showDrawer ? " " : <HiOutlineMenuAlt3 size={35} />}
      </div>
      <div className={`drawer ${showDrawer ? "show" : ""}`}>
        <div className="drawered">
          <HiOutlineX size={35} onClick={toggleDrawer} />
          <div className={`Logo ${showDrawer ? "logo" : ""}`}>
            <Image src={Logo} alt="logo" width={40} height={40} />
          </div>
          <Link href="/">Home</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/SignIn" className="SignInButton">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
