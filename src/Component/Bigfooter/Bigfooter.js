import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Bigfooter.css";
const Bigfooter = () => {
  return (
    <div className="footer-container">
      <div className="foot">
        <Row>
          <Col lg="4" sm={12}>
            <div className="left-foot">
              <h6>ABOUT US</h6>
              <p>
                We are one of the most recognized happy vacation makers in Italy
                – we provide a wide range of great villas for any occasion since
                2015. Any type of a winter or summer villa can be found on the
                site.
              </p>
            </div>
            <div className="left-secound">
              <h6>MULTILINGUAL VILLAGIO</h6>
              <p>
                <small>
                  The demo content in German is not a professional translation!
                  It’s sample data used to demonstrate a multilingual website
                  (localization was performed via WPML plugin, which is NOT
                  included into the theme).
                </small>
              </p>
              <p>
                <small>
                  Note: multi-currency is performed via addon, which is NOT
                  included into the theme.
                </small>
              </p>
            </div>
          </Col>
          <Col lg="4" sm={12}>
            <div className="mid-foot">
              <h6>RECENT NEWS</h6>
              <div className="sm">
                <small>
                  <Link className="link">
                    Unforgettable Vignanello garden tour in Lazio
                  </Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  <Link className="link">
                    Special discounts for Italian castles tour!
                  </Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  {" "}
                  <Link className="link">
                    Places of interest near summer villa Emilia
                  </Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  <Link className="link">
                    Celebrate Lucca Summer Festival with us
                  </Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  {" "}
                  <Link className="link">
                    Lazio or Campania: which location is best for your stay?
                  </Link>
                </small>
              </div>
            </div>
          </Col>
          <Col lg="4" sm={12}>
            <div>
              <h6>LINKS</h6>
              <div className="sm">
                <small>
                  <Link className="link">How to book</Link>
                </small>{" "}
              </div>
              <br></br>
              <div className="sm">
                <small>
                  {" "}
                  <Link className="link">General letting conditions</Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  <Link className="link">Jobs and careers</Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  <Link className="link">Travel agent resources</Link>
                </small>
              </div>
              <br></br>
              <div className="sm">
                <small>
                  <Link className="link">Contact us</Link>
                </small>
              </div>
              <br></br>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Bigfooter;
