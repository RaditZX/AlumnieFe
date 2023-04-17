import {Form, Button} from "react-bootstrap";
import "../assets/landingPage.css";
import Navbar from "../component/landingNavbar";
import {Link} from "react-router-dom"

export default function LandingPage(){
    return (
        <>

            <div className="container-awal">
                <Navbar/>
                <div className="container-awal-2">
                    <h1 style={{ color: "white" }}>ALUMNIE</h1>
                    <h6 style={{ color: "white" }}>"Make your life easier"</h6>
                    <Link to='/login' class="btn w-25 mt-2" style={{backgroundColor:'transparent', color:'white',borderRadius:'10px',borderColor:'white'}}>Join us now</Link>
                </div>
            </div>

        </>
    )
}