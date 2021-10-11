import React from "react";
import mist  from "./../assets/logoLight.png";
import { Link } from "react-router-dom";
import video from "./../assets/smoked_back.mp4" ;

const SignUpPage = () => {
    return (
        <div className="h-100 w-100 d-flex flex-column">
            <div className="h-100 w-100 position-absolute" style={{ opacity: 0.3, zIndex: -100 }}>
                <video id="video" className="h-100 w-100 position-absolute" style={{ objectFit: "cover" }} autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className="d-flex p-4 justify-content-between w-100" style={{ minHeight: "25vh" }}>
                <img src={mist} alt="MIST logo" style={{ height: "90px" }}></img>
                <img src={mist} alt="MIST logo" style={{ height: "90px" }}></img>
            </div>
            <div className="d-flex flex-column p-4 justify-content-center align-items-center w-100" style={{ height: "50vh" }}>
                <img src={mist} alt="" style={{ height: "120px" }}></img>
                <p className="mt-5 text-white lora-regular" style={{ fontSize: "1.5rem" }}>Get ready to be <span style={{ color: "#7027CE" }}>smoked</span></p>
                <Link to="/">
                    <button style={{ backgroundColor: "#7027CE", borderRadius: 25, fontSize: "1.3rem" }} className="py-2 px-5 border-0 text-white">Start</button>
                </Link>
            </div>
            <div className="row w-100 m-0" style={{ minHeight: "25vh" }}>   
                <div className="col-9 h-full bg-white">
                    <p>You can</p>
                </div>
                <div className="col-3 h-full bg-dark">k</div>
            </div>
        </div >
    );
}

export default SignUpPage;