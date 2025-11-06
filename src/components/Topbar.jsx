import React from "react";
import "../styles/topbar.css";
import logo from "../images/brand_Icon.svg";

function Topbar() {

  // const aboutRef = useRef(null);
  const handleScroll = () => {

    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };



  return (
    <header className="topbar">
      <div className="topbar-container">

        {/* Left Section - Logo & Brand Name */}
        <div className="topbar-left">
          <img src={logo} alt="Logo" className="topbar-logo" />
          <h1 className="brand-name">Nexcent</h1>
        </div>

        {/* Right Section - Navigation & Button */}
        <nav className="topbar-right">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/" onClick={handleScroll}>Features</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="">Blog</a></li>
          </ul>
          <button className="register-btn">Register →</button>
        </nav>

      </div>
    </header>
  );
}

export default Topbar;
