import {Route,Navigate,useLocation,Outlet} from "react-router-dom"



const PrivateRoute = ({ isLoggedIn, ...props }) => {
    const location = useLocation();
    return isLoggedIn? (
      <Outlet />
    ) : (
      <Navigate
        to={`/login`}
        replace
        state={{ location }}
      />
    )
  };




export default PrivateRoute