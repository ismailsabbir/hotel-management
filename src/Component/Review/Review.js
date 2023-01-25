import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import "./Review.css";
import person from "../../Asset/person.webp";
import person1 from "../../Asset/person1.webp";
import person2 from "../../Asset/person2.webp";
import { Col, Row } from "react-bootstrap";
const Review = () => {
  return (
    <div className="review-hole">
      <h3>Guest Reviews</h3>
      <Row className="review-container">
        <Col lg="4" sm={12} className="reviews">
          <div className="review-left">
            <img src={person} alt="" />
          </div>
          <div className="right">
            <FaQuoteLeft></FaQuoteLeft>
            <p>
              I was in Italy for the first time and stayed by chance in a winder
              cottage Monte Bianco. I must say that was an unforgettable
              experience!
            </p>
            <Link>-JOE DOE</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} className="reviews">
          <div className="review-left">
            <img src={person1} alt="" />
          </div>
          <div className="right">
            <FaQuoteLeft></FaQuoteLeft>
            <p>
              I’ll never forget our summer stay at villa Emilia! Perfect
              location, perfect service, amazing nature views. I enjoyed the
              stay and would recommend it to everyone.
            </p>
            <Link>― KIM LEE</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} className="reviews">
          <div className="review-left">
            <img src={person2} alt="" />
          </div>
          <div className="right">
            <FaQuoteLeft></FaQuoteLeft>
            <p>
              I was visiting Le Marche with my family and friends and stayed at
              Etna House – this was an amazing and unforgettable stay! A lot of
              space, a pool, a beachfront,
            </p>
            <Link>― TOM HEN</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
