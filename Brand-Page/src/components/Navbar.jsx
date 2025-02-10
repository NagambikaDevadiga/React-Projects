import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="logo">
        <div>
          <img src="/images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li id="#">Menu</li>
          <li id="#">Location</li>
          <li id="#">About</li>
          <li id="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
};

export default Navbar;
