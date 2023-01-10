import { Form, Button, Alert } from "react-bootstrap";
import "../assets/style.css";
import { NavLink, Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate()
  const logout = () => {
    confirmAlert({
        title: 'Logout',
        message: 'Anda yakin ingin keluar?',
        buttons: [
            {
                label: 'Yes',
                onClick: () => {
                 navigate('/login')
                }      
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
          <div className="d-flex justify-content-center align-items-center flex-column">
            <NavLink to={"/dashboard"}>
              <div className="container-dashboard">
                <img src={require("../assets/dashboard_1.png")} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <NavLink to={"/alumni/tabel"}>
              <div className="container-dashboard">
                <img src={require("../assets/active.png")} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <NavLink to={"/universitas/tabel"}>
              <div className="container-dashboard">
              <img src={require("../assets/Vector.png")} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <NavLink to={"/perusahaan/tabel"}>
              <div className="container-dashboard">
                <img src={require("../assets/Work.png")} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <NavLink to={"/wirausaha/tabel"}>
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
