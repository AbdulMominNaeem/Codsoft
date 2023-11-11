import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img from "../../Images/turkey 1.jpg";
import img2 from "../../Images/Switzerland.jpg";
import img3 from "../../Images/Italy.jpg";
import img4 from "../../Images/Brazil.jpg";
import img5 from "../../Images/Busan.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Istanbul",
    location: "Turkey",
    grade: "Amazing Places",
  },
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Chillon Castle",
    location: "Switzerland",
    grade: "Amazing Places",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Pantheon",
    location: "Italy",
    grade: "Amazing Places",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "São Paulo",
    location: "Brazil",
    grade: "Amazing Places",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "Busan",
    location: "Korea",
    grade: "Amazing Places",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="textDiv">
            <h2 className="secTitle">Popular</h2>
            <p>Let's see the best of the world!</p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2431"
            className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Loading..." />
                  <div className="overlayInfo">
                    <h3>{destTitle} </h3>
                    <p> {location} </p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id} </div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
