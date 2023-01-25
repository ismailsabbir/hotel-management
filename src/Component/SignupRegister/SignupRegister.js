import React, { useContext, useState } from "react";
import "./SignupRegister.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import background from "../../Asset/house1.jpg";
import login from "../../Asset/login1.webp";
import { Authcontext } from "../../Context/Usercontext";
import { Link } from "react-router-dom";
const SignupRegister = () => {
  const { createuser, googlesignup, emailverification, updateinformation } =
    useContext(Authcontext);
  const [sucess, setsucess] = useState(false);
  const [errors, seterrors] = useState("");
  const submithandler = (event) => {
    event.preventDefault();
    setsucess(false);
    const from = event.target;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const conframPassword = event.target.confram.value;
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      seterrors("At least Two capital letter");
      return;
    }
    if (password.length < 6) {
      seterrors("At least Six characters");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      seterrors("At least one Special characters");
      return;
    }
    if (password !== conframPassword) {
      seterrors("Password not match");
      return;
    }
    seterrors("");
    createuser(email, password)
      .then((req) => {
        emailverification()
          .then((req) => {
            alert("email verification check your email");
            console.log(req);
          })
          .catch((error) => {
            console.error(error);
          });
        updateinformation(name)
          .then(() => {
            // alert("Profile update");
          })
          .catch((error) => {
            console.error(error);
          });
        setsucess(true);
        from.reset();
      })
      .catch((error) => {
        console.error(error);
        seterrors(error.message);
      });
  };
  const googlesignuphandler = () => {
    googlesignup()
      .then((req) => {
        const user = req.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="left-login">
        <img src={login} alt="" />
      </div>
      <div className="signup-from">
        <h3>Signup</h3>
        <Form onSubmit={submithandler}>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label className="labels">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="labels">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="labels">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="labels">Confarm Password</Form.Label>
            <Form.Control
              type="password"
              name="confram"
              required
              placeholder="Confarm Password"
            />
          </Form.Group>
          <Button className="btn" variant="outline-warning" type="submit">
            Submit
          </Button>
          <p className="or">--------or--------</p>
          <Button
            onClick={googlesignuphandler}
            className="btn"
            variant="outline-info"
          >
            Signup with google
          </Button>
          <p className="or">--------or--------</p>
          <Button className="btn" variant="outline-info">
            Signup with facebook
          </Button>
          <p className="alredy">
            Already have an acount ? please <Link to="/login">LOG IN</Link>
          </p>
          {sucess && <p className="sucess">Acount created</p>}
          <p className="error">{errors}</p>
        </Form>
      </div>
    </div>
  );
};

export default SignupRegister;
