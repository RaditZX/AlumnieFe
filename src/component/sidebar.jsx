import { Form, Button, Alert } from "react-bootstrap";
import "../assets/style.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate,Navigate } from "react-router-dom";
import { AuthContext } from "../auth";
import app from "../base";

export default function Sidebar(props) {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const logout = () => {
    confirmAlert({
        title: 'Logout',
        message: 'Anda yakin ingin keluar?',
        buttons: [
            {
                label: 'Yes',
                onClick: () =>{ navigate('/login') && app.auth().signOut() }
            },
            {
                label: 'No'
            }
        ]});
  }

  return (
    <>
      <div className="container-sidebar">
        <div className="img-toga">
          <img src={require("../assets/toga.png")} alt="" />
        </div>

        <div className="component">
          <div className="d-flex justify-content-center align-items-center flex-column mb-2">
            <NavLink to={"/dashboard"}>
              <div className="container-dashboard">
                <img src={require("../assets/dashboard_1.png")} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mb-2">
            <NavLink to="/alumni/tabel?page=1&limit=10" className={props.alumni ? 'active' : null } >
              <div className="container-dashboard">
                <img src={require("../assets/Vector.png")} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mb-2">
            <NavLink to={"/alumni/jumlah"} className={props.wirausaha ? 'active' : null }>
              <div className="container-dashboard">
                <img src={require("../assets/wirausaha.png")} alt="" />
              </div>
            </NavLink>
          </div>
        </div>
        <Link onClick={()=>logout()}>
          <div className="component-logout">
            <img
              src={require("../assets/Logout.png")}
              alt=""
              className="img-logout"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
