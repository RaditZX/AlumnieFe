import { Form, Button, Alert } from "react-bootstrap";
import "../assets/style.css";
import { Link } from "react-router-dom";


export default function Sidebar() {

    return (

        <>
            <div className="container-sidebar">
                <img src={require("../assets/toga.png")} alt="" className="img-toga" />

                <div className="component">
                    <div className="container-dashboard">
                        <img src={require("../assets/dashboard_1.png")} alt="" className="img-dashboard" />
                    </div>

                    <div className="container-dashboard">
                        <img src={require("../assets/active.png")} alt="" className="img-active" />
                    </div>

                    <div className="container-dashboard">
                        <img src={require("../assets/Work.png")} alt="" className="img-work" />
                    </div>

                    <div className="container-dashboard">
                        <img src={require("../assets/Vector.png")} alt="" className="img-kuliah" />
                    </div>

                    <div className="container-dashboard">
                        <img src={require("../assets/wirausaha.png")} alt="" className="img-wirausaha" />
                    </div>

                </div>
                <Link to="/Login">
                <div className="component-logout">
                  <img src={require("../assets/Logout.png")} alt="" className="img-logout" />
                </div>
                </Link>
            </div>
        </>
    )
}