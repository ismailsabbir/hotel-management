import React from "react";
import "./Bookconfram.css";
import house2 from "../../Asset/house2.jpg";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import house from "../../Asset/house3.jpg";
import room1 from "../../Asset/room2.jpg";
import room2 from "../../Asset/room5.jpg";
const Bookconfram = () => {
  return (
    <div className="confram-container">
      <div
        className="confram-home"
        style={{
          backgroundImage: `url(${house2})`,
        }}
      ></div>
      <div className="confram">
        <div className="left-confram">
          <p>
            Le Marche Etna House is a popular villa in the region – it’s a fully
            equipped house with many 3 big rooms, swimming pool, terrace and
            lots of other things.
          </p>
          <p>
            Located 12 miles from Palermo, villa La Merche Etna House offers
            pet-friendly accommodations in with lots of outdoor and indoor
            facilities. The villa is equipped with air conditioning and free
            WiFi. Free private parking is available on site, so you should not
            have any problems with it.
          </p>
          <p>
            The kitchen is fitted with a dishwasher, refrigerator and an oven. A
            flat-screen TV is available in several rooms. You’ll also enjoly a
            sun terrace and many other things
          </p>
          <p>
            You’ll also enjpy a variety of activities are available in the area,
            for example, diving and fishing. The airport is also close –
            Falcone-Borsellino Airport, several miles away from the property.
          </p>
          <p>
            This villa is perfectly air conditioned and has a TV. Some units
            have a terrace and/or patio with sea views. There is a private
            bathroom with a bidet and shower in each unit, along with free
            toiletries. Towels are featured. The beaches around Rimini are
            especially popular in summer.
          </p>
          <p>
            A perfect place for small and big groups of people, friends and
            family trips.
          </p>
          <div className="img-container">
            <div className="imgs">
              <img src={room1} alt="" />
            </div>
            <div className="imgs">
              <img src={room2} alt="" />
            </div>
            <div className="imgs">
              <img src={house} alt="" />
            </div>
            <div className="imgs">
              <img src={house2} alt="" />
            </div>
          </div>
          <div className="detals">
            <h4>Details</h4>
            <table>
              <tr className="tdatas">
                <th className="tdata">Adults:</th>
                <td>10</td>
              </tr>
              <tr className="tdatas">
                <td>Children:</td>
                <td>4</td>
              </tr>
              <tr className="tdatas">
                <td>Amenities:</td>
                <td>
                  {" "}
                  Air conditioning, Balcony, Beachfront, Dining area,
                  Flat-screen TV, Free parking, Free WiFi, Outdoor pool
                </td>
              </tr>
              <tr className="tdatas">
                <td>View</td>
                <td> Swimming pool</td>
              </tr>
              <tr className="tdatas">
                <td>size</td>
                <td>
                  260m<sup>2</sup>
                </td>
              </tr>
              <tr className="tdatas">
                <td>Bed Type</td>
                <td> 1 Queen bad, 4 Tween beds, 1 Full bed</td>
              </tr>
              <tr className="tdatas">
                <td>Categories: </td>
                <td>Le Marche</td>
              </tr>
            </table>
          </div>
          <div className="avility">
            <h3>Reservation Form</h3>
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
              <button className="avility-btn">CHECK AVAILATY</button>
            </Form>
          </div>
        </div>
        <div className="right-confram">
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
            <div className="bottom-news">
              <h1>-</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookconfram;
