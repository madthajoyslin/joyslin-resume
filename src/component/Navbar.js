import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [locpath, setLocpath] = useState("/");
  useEffect(() => {
    setLocpath(location.pathname);
  }, [location]);

  //creating function using pointer
  const hamburger = (value) => {
    setNavbar(value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          {locpath === "/" ? "" : <Link to="/">Home</Link>}
          {locpath === "/about" ? "" : <Link to="/about">About</Link>}
          {locpath === "/Education" ? (
            ""
          ) : (
            <Link to="/Education">Education</Link>
          )}
          {locpath === "/skills" ? "" : <Link to="/skills">Skills</Link>}
          {locpath === "/Moreinfo" ? "" : <Link to="/Moreinfo">MoreInfo</Link>}
          {locpath === "/Contact" ? "" : <Link to="/Contact">Contact</Link>}
        </div>

        <div className="mobile-menu">
          <span className="icon" onClick={() => hamburger(true)}>
            <button onClick={() => hamburger(true)}>&#9776;</button>
          </span>

          {navbar ? (
            <div className="sidebar">
              <span onClick={() => hamburger(false)}></span>

              <ul>
                <li>
                  <Link to="/" onClick={() => hamburger(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => hamburger(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Education" onClick={() => hamburger(false)}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/skills" onClick={() => hamburger(false)}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" onClick={() => hamburger(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
