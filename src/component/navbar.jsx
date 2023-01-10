import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import { Link } from "react-router-dom";
import App from "../App";

export default function Navbar(props) {
  return (
    <>
      <div className="container-navbar">
        <div className="container-navbar-dua">
          <div className="container-navbar-dua-kanan">
            <h5 className="dashboard">{props.title}</h5>
          </div>
          <div className="container-navbar-dua-kiri">
            <div className="container-admin">
              <div className="text">
                <p>Admin</p>
              </div>
              <div className="icon">
                <img
                  src={require("../assets/Vectorrr.png")}
                  alt=""
                  className="img-admin"
                />
              </div>
            </div>
            <img
              src={require("../assets/Fill.png")}
              alt=""
              className="img-lonceng"
            />
            <Link to="/EditProfile">
              <img
                src={require("../assets/profile.png")}
                alt=""
                className="img-profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
