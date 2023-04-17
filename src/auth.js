import React,{useState,useEffect} from "react";
import app from "./base";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(user=>{
            if (user) {
                // store the user on local storage
                setCurrentUser(user)
            } else {
                // removes the user from local storage on logOut
                localStorage.removeItem('user');
            }
        })
    },[]);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}