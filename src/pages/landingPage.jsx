import {Form, Button} from "react-bootstrap";
import "../assets/landingPage.css";
import Navbar from "../component/landingNavbar";

export default function LandingPage(){
    return (
        <>
            <Navbar/>
            <div className="container-awal">
                <img src={require("../assets/landing-1.png")} className="img-landingpage1"/>

                <div className="container-awal-2">
                    <h1 style={{ color: "white" }}>ALUMNIE</h1>
                    <h6 style={{ color: "white" }}>Merupakan Website yang digunakan untuk mendata alumni dengan mudah</h6>
                </div>
            </div>

            <div className="container-kedua">
                <div className="container-kedua-1">
                    <div className="component1">
                        <div className="component1-1">
                            <h3>Sarana mempermudah
                            pengaturan dan pengolahan
                            data alumni</h3>
                        </div>
                        <div className="component1-2">
                            <h3>Website ini dapat membantu 
                            menampilkan profil alumni
                            yang terbaru.</h3>
                        </div>
                    </div>

                    <div className="component2">
                        <div className="component2-1">
                            <h3>Website ini memudahkan
                            pendataan alumni</h3>
                        </div>
                        <div className="component2-2">
                            <h3>Sekolah memiliki
                            data alumni yang akurat</h3>
                        </div>
                    </div>
                </div>
                <img src={require("../assets/Saly-22.png")}/>
            </div>
        </>
    )
}