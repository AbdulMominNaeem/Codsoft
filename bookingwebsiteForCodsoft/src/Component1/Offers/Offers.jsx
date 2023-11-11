import React, { useEffect } from "react";
import "./offers.css";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

import img6 from "../../Images/hotel.jpg";
import img7 from "../../Images/hotel1.jpg";
import img8 from "../../Images/turkey.jpg";
const Offer = [
  {
    id: 1,
    imgSrc: img6,
    destTitle: "Wusangata",
    location: "Switzerland",
    price: "$2,234",
  },
  {
    id: 2,
    imgSrc: img7,
    destTitle: "Jikoan",
    location: "Italy",
    price: "$5,634",
  },
  {
    id: 3,
    imgSrc: img8,
    destTitle: "Ktaoma",
    location: "Brazil",
    price: "$8,764",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2123" className="secIntro">
          <h2 className="secTitle">Best Offers</h2>
          <p>From historical cities to natural scenery!</p>
        </div>

        <div className="mainContent grid">
          {Offer.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3123"
                className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30%</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>

                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>96 G4 Vine {location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
