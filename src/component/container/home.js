import React from "react";
import "../../sass/main.scss";
import chickenImg from "../../assets/images/chicken.jpg";
import pannerImg from "../../assets/images/panner.jpg";

const Home = () => {
  return (
      <>
    <div className="home_container">
      <img src={chickenImg} alt="chicken" />
      <img src={pannerImg} alt="panner" />
    </div>
    <p className="heading">We would be obliged if you could attend our house warming lunch party this Saturday at 1:00 pm.</p>
    <address className="heading">Venue: Kumar Ankur (9599015901), B6-104, Panchsheel Green 2, Sector 16B, Noida Extension.</address>
    <p className="heading">Please fill the form or select checkbox below for Lunch:</p>
    </>
  );
};

export default Home;
