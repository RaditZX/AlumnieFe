import {Form, Button} from "react-bootstrap";
import "../assets/style.css";

export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center " >
                <div className="container-form" style={{paddingTop:"8rem"}}>
                    <div className="form-login">
                        <h1>Sign In</h1><br />
                        <form action="">
                            <Form.Control className="login-input" placeholder="Enter your email" /><br/>
                            <Form.Control className="login-input" placeholder="Enter your password" /><br/>
                            <Button style={{width:"100%"}}>Login</Button>
                        </form>
                    </div>
                </div>
                <div className="icon-login">
                    <div className="d-flex flex-column align-items-center p-3">
                        <h2 className="fw-bold">Alumnie</h2>
                        <h5 className="text-primary">Aplikasi Pendataan Alumni</h5>
                        <img 
                        src={require("../assets/College graduates in robes toss up graduate caps against the background of the university building.png")} 
                        alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}