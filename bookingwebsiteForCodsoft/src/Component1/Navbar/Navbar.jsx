import React, { useState } from "react";
import "./navbar.css";
import { SiWindows, SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const closeNav = () => {
    setActive("navBar");
  };

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <>
      <section className="navBarSection">
        <div className={transparent}>
          <div className="logoDiv">
            <a href="#" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Resources
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Blog
                </a>
              </li>
              {isAuthenticated && (
                <li className="navItem">
                  <p>{user.name}</p>
                </li>
              )}
              {isAuthenticated ? (
                <div className="headerBtns flex">
                  <button
                    className="btn loginBtn"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }>
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="headerBtns flex">
                  <button
                    onClick={() => loginWithRedirect()}
                    className="btn loginBtn">
                    Login
                  </button>
                  <button onClick={() => loginWithRedirect()} className="btn">
                    Sign Up
                  </button>
                </div>
              )}
            </ul>
            <div onClick={closeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toogleNavbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
