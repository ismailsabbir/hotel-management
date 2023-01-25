import React from "react";
import "./SearchHotel.css";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
const SearchHotel = () => {
  return (
    <div className="hole-search">
      <div className="data">
        <h3>The villa rental expert for your vacation</h3>
        <p>
          Villagio offers diverse villas in different regions to help you spend
          your dream vacation. Book your villa online quickly and safely.
        </p>
      </div>
      <div>
        <Form className="serch-container">
          <Form.Group className="mb-3 input-data" controlId="formBasicdate">
            <Form.Label>Check-in *</Form.Label>
            <Form.Control
              className="date"
              type="date"
              placeholder="Check-In-Date"
            />
          </Form.Group>
          <Form.Group className="mb-3 input-data" controlId="formBasicdate">
            <Form.Label>Check-out *</Form.Label>
            <Form.Control
              className="date"
              type="date"
              placeholder="Check-In-Date"
            />
          </Form.Group>
          <Form.Group className="mb-3 input-data" controlId="formBasicdate">
            <Form.Label>Adults</Form.Label>
            <Form.Control className="date" type="number" placeholder="1" />
          </Form.Group>
          <Form.Group className="mb-3 input-data" controlId="formBasicdate">
            <Form.Label>Children</Form.Label>
            <Form.Control className="date" type="number" placeholder="0" />
          </Form.Group>
          <button className="search-btn" type="submit">
            SEARCH
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SearchHotel;
