import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import { Link } from "react-router-dom";
import App from "../App";

export default function Navbar() {
  return (
    <>
      <div className="container-navbar">
        <div className="container-navbar-dua">
          <div className="container-navbar-dua-kanan">
            <h5 className="dashboard">Dashboard</h5> 
            <Link to="/Dashboard">
            <img src={require("../assets/Home.png")} alt="" className="img-home" />
            </Link>
          </div>
          <div className="container-navbar-dua-kiri">
            <div className="container-admin">
              <h5>Admin</h5>
              <img src={require("../assets/Vectorrr.png")} alt="" className="img-admin" />
            </div>
            <img src={require("../assets/Fill.png")} alt="" className="img-lonceng" />
            <Link to="/EditProfile">
            <img src={require("../assets/profile.png")} alt="" className="img-profile" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}