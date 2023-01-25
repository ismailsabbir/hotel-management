import React, { useContext } from "react";
import "./Book.css";
import house from "../../Asset/house.jpg";
import house1 from "../../Asset/house2.jpg";
import house2 from "../../Asset/house3.jpg";
import house3 from "../../Asset/house4.jpg";
import house4 from "../../Asset/house5.jpg";
import house5 from "../../Asset/house6.jpg";
import { FaChild, FaUser, FaGg } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Authcontext } from "../../Context/Usercontext";
const Book = () => {
  const { user } = useContext(Authcontext);
  console.log(user);
  return (
    <div className="books-container">
      <Row>
        <Col lg="4" sm={12} md={6} className="book">
          <div className="top">
            <img src={house} alt="" />
            <h3>Le Marche Etna House</h3>
            <p>
              Le Marche Etna House is a fully equipped villa with many 3 big
              rooms, swimming pool, terrace and lots of other facilities.
            </p>
          </div>
          <div className="mid">
            <p>
              <FaChild></FaChild>4
            </p>
            <p>
              <FaUser></FaUser>10
            </p>
            <p>
              <FaGg></FaGg>260m
            </p>
          </div>
          <div className="upbottom">
            <p>
              <small>
                Amenities: Air conditioning, Balcony, Beachfront, Dining area,
                Flat-screen TV, Free parking, Free WiFi, Outdoor poolView:
                Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                Categories: Le Marche
              </small>
            </p>
            <p>Prices start at: $750 for 3 nights (+taxes and fees)</p>
          </div>
          <div className="bottom">
            <button>
              <Link to="/book">Book</Link>
            </button>
            <Link>View Details</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} md={6} className="book">
          <div className="top">
            <img src={house1} alt="" />
            <h3>Le Marche Etna House</h3>
            <p>
              Le Marche Etna House is a fully equipped villa with many 3 big
              rooms, swimming pool, terrace and lots of other facilities.
            </p>
          </div>
          <div className="mid">
            <p>
              <FaChild></FaChild>10
            </p>
            <p>
              <FaUser></FaUser>4
            </p>
            <p>
              <FaGg></FaGg>260m
            </p>
          </div>
          <div className="upbottom">
            <p>
              <small>
                Amenities: Air conditioning, Balcony, Beachfront, Dining area,
                Flat-screen TV, Free parking, Free WiFi, Outdoor poolView:
                Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                Categories: Le Marche
              </small>
            </p>
            <p>Prices start at: $750 for 3 nights (+taxes and fees)</p>
          </div>
          <div className="bottom">
            <button>
              <Link to="/book">Book</Link>
            </button>
            <Link>View Details</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} md={6} className="book">
          <div className="top">
            <img src={house2} alt="" />
            <h3>Le Marche Etna House</h3>
            <p>
              Le Marche Etna House is a fully equipped villa with many 3 big
              rooms, swimming pool, terrace and lots of other facilities.
            </p>
          </div>
          <div className="mid">
            <p>
              <FaChild></FaChild>10
            </p>
            <p>
              <FaUser></FaUser>4
            </p>
            <p>
              <FaGg></FaGg>260m
            </p>
          </div>
          <div className="upbottom">
            <p>
              <small>
                Amenities: Air conditioning, Balcony, Beachfront, Dining area,
                Flat-screen TV, Free parking, Free WiFi, Outdoor poolView:
                Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                Categories: Le Marche
              </small>
            </p>
            <p>Prices start at: $750 for 3 nights (+taxes and fees)</p>
          </div>
          <div className="bottom">
            <button>
              <Link to="/book">Book</Link>
            </button>
            <Link>View Details</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} md={6} className="book">
          <div className="top">
            <img src={house3} alt="" />
            <h3>Le Marche Etna House</h3>
            <p>
              Le Marche Etna House is a fully equipped villa with many 3 big
              rooms, swimming pool, terrace and lots of other facilities.
            </p>
          </div>
          <div className="mid">
            <p>
              <FaChild></FaChild>10
            </p>
            <p>
              <FaUser></FaUser>4
            </p>
            <p>
              <FaGg></FaGg>260m
            </p>
          </div>
          <div className="upbottom">
            <p>
              <small>
                Amenities: Air conditioning, Balcony, Beachfront, Dining area,
                Flat-screen TV, Free parking, Free WiFi, Outdoor poolView:
                Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                Categories: Le Marche
              </small>
            </p>
            <p>Prices start at: $750 for 3 nights (+taxes and fees)</p>
          </div>
          <div className="bottom">
            <button>
              <Link to="/book">Book</Link>
            </button>
            <Link>View Details</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} md={6} className="book">
          <div className="top">
            <img src={house4} alt="" />
            <h3>Le Marche Etna House</h3>
            <p>
              Le Marche Etna House is a fully equipped villa with many 3 big
              rooms, swimming pool, terrace and lots of other facilities.
            </p>
          </div>
          <div className="mid">
            <p>
              <FaChild></FaChild>10
            </p>
            <p>
              <FaUser></FaUser>4
            </p>
            <p>
              <FaGg></FaGg>260m
            </p>
          </div>
          <div className="upbottom">
            <p>
              <small>
                Amenities: Air conditioning, Balcony, Beachfront, Dining area,
                Flat-screen TV, Free parking, Free WiFi, Outdoor poolView:
                Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                Categories: Le Marche
              </small>
            </p>
            <p>Prices start at: $750 for 3 nights (+taxes and fees)</p>
          </div>
          <div className="bottom">
            <button>
              <Link to="/book">Book</Link>
            </button>
            <Link>View Details</Link>
          </div>
        </Col>
        <Col lg="4" sm={12} md={6} className="book">
          <div className="top">
            <img src={house5} alt="" />
            <h3>Le Marche Etna House</h3>
            <p>
              Le Marche Etna House is a fully equipped villa with many 3 big
              rooms, swimming pool, terrace and lots of other facilities.
            </p>
          </div>
          <div className="mid">
            <p>
              <FaChild></FaChild>10
            </p>
            <p>
              <FaUser></FaUser>4
            </p>
            <p>
              <FaGg></FaGg>260m
            </p>
          </div>
          <div className="upbottom">
            <p>
              <small>
                Amenities: Air conditioning, Balcony, Beachfront, Dining area,
                Flat-screen TV, Free parking, Free WiFi, Outdoor poolView:
                Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                Categories: Le Marche
              </small>
            </p>
            <p>Prices start at: $750 for 3 nights (+taxes and fees)</p>
          </div>
          <div className="bottom">
            <button>
              <Link to="/book">Book</Link>
            </button>
            <Link>View Details</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
