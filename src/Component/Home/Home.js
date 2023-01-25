import React from "react";
import "./Home.css";
import cover from "../../Asset/house1.jpg";
import SearchHotel from "../SearchHotel/SearchHotel";
import Book from "../Book/Book";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="information">
          <button className="small-btn">Le Marche</button>
          <h3>Villa Bastilicata Grand</h3>
          <p>
            This is a perfect villa with spa center and hot tub for private,
            family and corporate rest in Le Marche region in Italy, with best
            nature views.
          </p>
          <p>Prices start at: $630 for 3 nights (+taxes and fees)</p>
          <button className="large-btn">BOOK</button>
        </div>
      </div>
      <SearchHotel></SearchHotel>
      <Book></Book>
      <Review></Review>
    </div>
  );
};

export default Home;
