import React, { useContext, useState } from "react";
import "./Signinlogin.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import background from "../../Asset/house1.jpg";
import login from "../../Asset/login2.webp";
import { Authcontext } from "../../Context/Usercontext";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SigninLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const { loginuser, googlelogin, forgetpassword } = useContext(Authcontext);
  const [sucess, setsucess] = useState(false);
  const [errors, seterrors] = useState("");
  const [email, setemail] = useState("");
  const handlelogin = (event) => {
    event.preventDefault();
    setsucess(false);
    const conframpassword = event.target.confram.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password, conframpassword);
    if (password !== conframpassword) {
      seterrors("password not match");
      return;
    }
    seterrors("");
    loginuser(email, password)
      .then((req) => {
        const user = req.user;
        console.log(user);
        setsucess(true);
        navigate(from, { replace: true });
      })
      .catch((errpr) => {
        console.error(errpr);
        seterrors(errpr.message);
      });
  };
  const handlelogingoogle = () => {
    googlelogin()
      .then((req) => {
        const user = req.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlesetemail = (event) => {
    const email = event.target.value;
    setemail(email);
  };
  const handleforgetpassword = () => {
    forgetpassword(email)
      .then(() => {
        alert("Password Reset Email sent.plese check your email");
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
        <h3>LOGIN</h3>
        <Form onSubmit={handlelogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="labels">Email address</Form.Label>
            <Form.Control
              onBlur={handlesetemail}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="labels">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="labels">Confarm Password</Form.Label>
            <Form.Control
              type="password"
              name="confram"
              placeholder="Confarm Password"
            />
          </Form.Group>
          <Button className="btn" variant="outline-warning" type="submit">
            Submit
          </Button>
          <p className="or">--------or--------</p>
          <Button
            onClick={handlelogingoogle}
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
            Forget password?
            <Link onClick={handleforgetpassword}>Reset password</Link>
          </p>
          <p className="alredy">
            If you have not Account? please <Link to="/signup">SIGN UP</Link>
          </p>
          {sucess && <p className="sucess">login Sucessfull</p>}
          <p className="error">{errors}</p>
        </Form>
      </div>
    </div>
  );
};

export default SigninLogin;
