import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container-navbar">
        <div className="container-navbar-dua">
          <div className="container-navbar-dua-kanan">
            <h5>Dashboard</h5>
          </div>
          <div className="container-navbar-dua-kiri">
            <div className="container-admin">
              <h5>Admin</h5>
              <img src={require("../assets/Vectorrr.png")} alt="" className="img-admin" />
            </div>
            <img src={require("../assets/Fill.png")} alt="" className="img-lonceng" />
            <img src={require("../assets/profile.png")} alt="" className="img-profile" />
          </div>
        </div>
      </div>
    </>
  )
}