import {Form, Button} from "react-bootstrap";
import "../assets/style.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
          <div className="sidebar">
                <div className="header-side">
                    <h1 style={{color:"white"}}>ALUMNIE</h1>
                    <div className="side-item">
                    <div className="dashboard">
                        <img src={require("../assets/Vector.png")} alt="" className="img-Dashboard"/>
                        <h4 style={{color:"white"}}>Dashboard</h4>
                    </div>
                    <div className="graduate">
                        <img src={require("../assets/graduate.png")} alt="" className="img-graduate"/>
                        <h4 style={{color:"white"}}>Data Alumni</h4>
                    </div>
                </div>
                </div>
                <div className="side-bottom">
                    <img src={require("../assets/Man studying analytics on laptop.png")}alt="" className="w-100"/>
                </div>
          </div>
        </>
    )
}