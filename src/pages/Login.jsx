import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useState } from "react";
import app from "../base";
import "../assets/style.css";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import { padding } from "@mui/system";

export default function Login() {
  const navigate = useNavigate();
  const [sentemail, setSentEmail] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const emails = email.value;
    const passwords = password.value;
    axios
      .post(process.env.REACT_APP_API_LINK + "api/auth/signin", {
        email: emails,
        password: passwords,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("token", res.data.accessToken);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="background ">
        <div className="background-blur d-flex  justify-content-center align-items-center ">
          <div className="container d-flex justify-content-center align-items-center p-5">
            <div className="container-login d-flex justify-content-center align-items-center ">
              <div style={{ flex: "70%" }}>
                {error ? <Alert  severity="error">{error}</Alert> : null}
                <Form
                  onSubmit={handleSignIn}
                  className=" d-flex flex-column  w-100 p-5"
                >
                  <div className="d-flex justify-content-center">
                    <img
                      src={require("../assets/toga.png")}
                      style={{ maxWidth: "100%" }}
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <h1>ALUMNIE</h1>
                  </div>
                  <label htmlFor="">Email</label>
                  <Form.Control
                    name="email"
                    type="email"
                    style={{ backgroundColor: "#EFF1F9" }}
                  />
                  <label htmlFor="">Password</label>
                  <Form.Control
                    name="password"
                    type="password"
                    style={{ backgroundColor: "#EFF1F9" }}
                  />
                  <div className="d-flex align-items-right justify-content-end mt-2">
                    <Link style={{ textDecoration: "none" }}>
                      ForgotPassword?
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <Button type="submit" style={{ width: "100%" }}>
                      Login
                    </Button>
                  </div>
                </Form>
              </div>

              <div style={{ flex: "50%" }}>
                <img
                  src={require("../assets/LoginImage.jpg")}
                  style={{ maxWidth: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
