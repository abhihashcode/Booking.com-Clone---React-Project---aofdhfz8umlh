import React, { useState } from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { Link } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than five");
    } else {
      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
      const temp = [...data, inpval];
      setData(() => {
        return temp;
      });
    }
    if (name && email && password) {
      alert("Sign-up Successful");
      history("/login");
    }
  };

  return (
    <div className="cons">
      <div className="container">
        <section className="starting">
          <div className="left-data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your Name"
                  className="inp"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                  className="inp"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                  className="inp"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={addData}
                className="buttons col-lg-6"
              >
                Submit
              </Button>
            </Form>
            <p className="para">
              Already have an account?{" "}
              <span>
                <a href="#">
                  <Link to="/login">Log In</Link>
                </a>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Signup;
