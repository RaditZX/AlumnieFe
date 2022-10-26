import { Form, Button } from "react-bootstrap";
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
                        {/* <FontAwesomeIcon icon="fa-solid fa-grid-horizontal" /> */}
                        {/* <font-awesome-icon icon="fa-solid fa-grid-horizontal" /> */}
                        {/* <i class="fa-solid fa-grid-horizontal"></i> */}
                    </div>

                    <div className="container-dashboard">
                        <img src={require("../assets/active.png")} alt="" className="img-active" />
                    </div>

                </div>

                <div className="component-logout">
                    <img src={require("../assets/Logout.png")} alt="" className="img-logout" />
                </div>

            </div>
        </>
    )
}