import React from "react";
import "./Service.css";
import room from "../../Asset/room5.jpg";
import room1 from "../../Asset/room2.jpg";
import Form from "react-bootstrap/Form";
import house from "../../Asset/house3.jpg";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <div className="">
      <div className="sevice-container">
        <div className="left">
          <h3>Archives: Services</h3>
          <img src={room} alt="" />
          <h3 className="archive">Food hamper</h3>
          <p>
            Arriving late to our villa? When the shops are closed? You should
            not rush out and do the shopping! Book a food hamper and find the
            indispensable in the villa at your arrival.
          </p>
          <p>
            Food Hamper can be delivered directly to the villa for arrival.
            Hampers contain: bread, eggs, salt, pepper, sugar, tea, coffee,
            milk, butter, ham (200 gr.), salami (200 gr.) 500gr of pasta, 1 tin
            of Tuna fish, 1 jar of pasta sauce, 1 packet of biscuits, 1 jar of
            marmalade, 1 bottle of mineral water, 1 bottle of white wine, 1
            bottle of red wine, toilet paper, 1 packet of serviettes and 1 bar
            of soap.
          </p>
          <h3 className="price">Price</h3>
          <p className="pri">$55 / Once / Per Accommodation</p>
          <img src={room1} alt="" />
          <h3 className="archive">Food hamper</h3>
          <p>
            Arriving late to our villa? When the shops are closed? You should
            not rush out and do the shopping! Book a food hamper and find the
            indispensable in the villa at your arrival.
          </p>
          <p>
            Food Hamper can be delivered directly to the villa for arrival.
            Hampers contain: bread, eggs, salt, pepper, sugar, tea, coffee,
            milk, butter, ham (200 gr.), salami (200 gr.) 500gr of pasta, 1 tin
            of Tuna fish, 1 jar of pasta sauce, 1 packet of biscuits, 1 jar of
            marmalade, 1 bottle of mineral water, 1 bottle of white wine, 1
            bottle of red wine, toilet paper, 1 packet of serviettes and 1 bar
            of soap.
          </p>
          <h3 className="price">Price</h3>
          <p className="pri">$55 / Once / Per Accommodation</p>
        </div>
        <div className="right">
          <p>
            <small>Required fields are followed by *</small>
          </p>
          <div className="serch-con">
            <Form>
              <Form.Group
                className="mb-3 input-dataa"
                controlId="formBasicdate"
              >
                <Form.Label>Check-in *</Form.Label>
                <Form.Control
                  className="datea"
                  type="date"
                  placeholder="Check-In-Date"
                />
              </Form.Group>
              <br></br>
              <Form.Group
                className="mb-3 input-dataa"
                controlId="formBasicdate"
              >
                <Form.Label>Check-out *</Form.Label>
                <Form.Control
                  className="date"
                  type="date"
                  placeholder="Check-In-Date"
                />
              </Form.Group>
              <br></br>
              <Form.Group
                className="mb-3 input-dataa"
                controlId="formBasicdate"
              >
                <Form.Label>Adults</Form.Label>
                <Form.Control className="date" type="number" placeholder="1" />
              </Form.Group>
              <br></br>
              <Form.Group
                className="mb-3 input-dataa"
                controlId="formBasicdate"
              >
                <Form.Label>Children</Form.Label>
                <Form.Control className="date" type="number" placeholder="0" />
              </Form.Group>
              <button className="search-btn" type="submit">
                SEARCH
              </button>

              <h3 className="reg">REGION</h3>
              <button className="reg-btn">Aosta Vally</button>
              <button className="reg-btn">Lazio</button>
              <button className="reg-btn">Le Mearch</button>
              <h5 className="recom">WE RECOMMEND</h5>
              <img className="right-img" src={house} alt="" />
              <h6>Summer Villa Emilia</h6>
              <p>Prices start at: $561 for 3 nights (+taxes and fees)</p>
              <button className="search-btn" type="submit">
                BOOK
              </button>
              <h5 className="recent">RECENT COMMENTS</h5>
              <div className="rec-para">
                <p>
                  Stacy Palmer on
                  <Link className="rec-link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </p>
                <p>
                  Stacy Palmer on{" "}
                  <Link className="rec-link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </p>
                <p>
                  Stacy Palmer on{" "}
                  <Link className="rec-link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </p>
                <p>
                  Stacy Palmer on{" "}
                  <Link className="rec-link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </p>
                <p>
                  Stacy Palmer on{" "}
                  <Link className="rec-link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </p>
                <p>
                  Stacy Palmer on{" "}
                  <Link className="rec-link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </p>
              </div>
              <h4>Search</h4>
              <Form.Group className="mb-3 input-data" controlId="formBasicdate">
                <Form.Control
                  className="date"
                  type="searc"
                  placeholder="Search"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
