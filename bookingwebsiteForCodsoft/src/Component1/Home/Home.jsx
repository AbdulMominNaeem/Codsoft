import React, { useEffect } from "react";
import "./home.css";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" className="title">
              Plan Your Trip With Us!
            </h1>
            <p data-aos="fade-up" data-aos-duration="2431" className="subTitle">
              Travel To Your Desire City With Us
            </p>

            <button data-aos="fade-up" data-aos-duration="2945" className="btn">
              <a href="#">Explore More!</a>
            </button>
          </div>

          <div className="homeCard grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2134"
              className="locationDiv ">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Location" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2431"
              className="distDiv ">
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder="Distance" />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2931"
              className="priceDiv ">
              <label htmlFor="price">Price</label>
              <input type="text" placeholder="Price" />
            </div>

            <button
              data-aos="fade-left"
              data-aos-duration="2431"
              className="btn">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
