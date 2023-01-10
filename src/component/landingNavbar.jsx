import {Form, Button} from "react-bootstrap";
import "../assets/landingPage.css";
import { Link } from "react-router-dom";

export default function landingNavbar() {
    return (
        <header className="header sticky-top">
            <nav>
                <div className="d-flex justify-content-between align-items-center p-3 sticky" style={{ backgroundColor:"#25244E" }}>
                    <div className="brand">
                        <h2 className="text-white">ALUMNIE</h2>
                    </div>
                    <div className="nav_items">
                        <Link className="items" style={{ marginRight:"1rem" }}>HOME</Link>
                        <Link className="items">ABOUT</Link>
                    </div>
                    <a href="/login" className="a-href-login">Login</a>
                </div>
            </nav>
        </header>
        
    )
}
