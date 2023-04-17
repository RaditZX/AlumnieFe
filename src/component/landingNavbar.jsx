import {Form, Button} from "react-bootstrap";
import "../assets/landingPage.css";
import { Link } from "react-router-dom";

export default function landingNavbar() {
    return (
        <header className="header sticky-top">
            <nav>
                <div className="d-flex justify-content-between align-items-center p-3 sticky " >
                    <div className="brand d-flex">
                        <h2 className="text-white " style={{marginRight:'1rem',textShadow:'2px 2px black'}}>ALUMNIE</h2>
                        <div className="nav_items">
                            <Link className="items" style={{ marginRight:"1rem" ,textShadow:'2px 2px black'}}>HOME</Link>
                            <Link className="items" style={{textShadow:'2px 2px black'}}>ABOUT</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}
