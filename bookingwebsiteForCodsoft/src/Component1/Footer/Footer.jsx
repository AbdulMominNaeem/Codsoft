import React, { useEffect } from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="footer">
        <div className="secContainer container grid">
          <div data-aos="fade-up" data-aos-duration="2131" className="logoDiv">
            <div
              data-aos="fade-up"
              data-aos-duration="2131"
              className="footerLogo">
              <a href="" className="logo flex">
                <h1 className="flex">
                  <SiYourtraveldottv className="icon" />
                </h1>
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2931"
              className="socials flex">
              <ImFacebook className="icon" />
              <BsTwitter className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2931"
            className="footerLinks">
            <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Consitions</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3931"
            className="footerLinks">
            <span className="linkTitle">Information</span>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="4931"
            className="footerLinks">
            <span className="linkTitle">Contact Us</span>
            <span className="phone">+344 234 2342</span>
            <span className="email">name@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
