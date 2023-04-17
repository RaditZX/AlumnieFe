import React from "react";
import ReactLoading from "react-loading";
import HashLoader from "react-spinners/HashLoader";
  
export default function Loading(props) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:'white', height:'100vh'}}>
      <HashLoader
        color={'#0000ff'}
        loading={props.loading}
        size={150}
      />
        </div>
    </div>
  );
}