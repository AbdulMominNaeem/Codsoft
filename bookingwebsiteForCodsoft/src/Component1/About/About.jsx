import React, { useEffect } from "react";
import "./about.css";
import img from "../../Images/mountain.png";
import img2 from "../../Images/hiking 2.png";
import img3 from "../../Images/hiking.png";
import video from "../../Videos/hiking.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="titel">
          <h1 className="secTiltle">Why Choose Us!</h1>
          <p>Why Mountain Climbing?</p>
        </div>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2131"
            className="singleItem">
            <img src={img} alt="Loading...." />

            <h3>100+ Peaks</h3>
            <p>A healthy journey across mountains!</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2431"
            className="singleItem">
            <img src={img2} alt="Loading...." />

            <h3>10000+ Spots</h3>
            <p>A healthy journey across mountains!</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2931"
            className="singleItem">
            <img src={img3} alt="Loading...." />

            <h3>2000+ Climbers</h3>
            <p>A healthy journey across mountains!</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2131"
              className="cardText">
              <h2>Wonderful Experience in there!</h2>
              <p>Adventure subranking is based on fun!</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2131"
              className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
