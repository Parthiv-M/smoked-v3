import React from "react";
import mist from "./../assets/logoLight.png";
import smoked from "./../assets/smoked_logo.png";
import { Link } from "react-router-dom";
import video from "./../assets/smoked_back.mp4" ;

const LandingPage = () => {
    return (
        <div className="h-100 w-100 d-flex flex-column">
            <div className="h-100 w-100 position-fixed" style={{ opacity: 0.3, zIndex: -100 }}>
                <video id="video" className="h-100 w-100 position-absolute" style={{ objectFit: "cover" }} autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className="d-flex flex-wrap p-4 justify-content-md-between justify-content-center w-100" style={{ minHeight: "25vh" }}>
                <img src={mist} alt="MIST logo" className="my-2 mx-3" style={{ height: "50px" }}></img>
                <img src={mist} alt="MIST logo" className="my-2 mx-3" style={{ height: "50px" }}></img>
            </div>
            <div className="d-flex flex-column p-4 justify-content-center align-items-center w-100" style={{ height: "50vh" }}>
                <img src={smoked} alt="Smoked Logo" style={{ height: "120px" }}></img>
                <p className="mt-5 text-white lora-regular" style={{ fontSize: "1.5rem" }}>Get ready to be <span style={{ color: "#7027CE" }}>smoked</span></p>
                <Link to="/signup">
                    <button style={{ backgroundColor: "#7027CE", borderRadius: 25, fontSize: "1.3rem" }} className="py-2 px-5 border-0 text-white">Start</button>
                </Link>
            </div>
            <div className="row w-100 m-0" style={{ minHeight: "25vh" }}>   
                <div className="col-md-4 col-12">

                </div>
                <div className="col-md-4 col-12 h-full d-flex flex-column align-items-center justify-content-center">
                    <p className="lora-bold m-0 p-0 pb-2 text-white" style={{ fontSize: "1.8rem" }}>Start playing in</p>
                    <div className="bg-white w-50" style={{ height: 1 }}></div>
                    <div className="d-flex w-100 align-items-center text-center justify-content-center my-3" style={{ fontSize: "1.5rem" }}>
                        <p className="mx-1 text-white lora-regular"><span style={{ fontSize: "2rem", color: "#7027CE" }}>06</span> days</p>
                        <p className="mx-1 text-white lora-regular"><span style={{ fontSize: "2rem", color: "#7027CE" }}>06</span> hours</p>
                        <p className="mx-1 text-white lora-regular"><span style={{ fontSize: "2rem", color: "#7027CE" }}>06</span> minutes</p>
                        <p className="mx-1 text-white lora-regular"><span style={{ fontSize: "2rem", color: "#7027CE" }}>06</span> seconds</p>
                    </div>
                </div>
                <div className="col-md-4 col-12 h-full bg-dark">k</div>
            </div>
        </div >
    );
}

export default LandingPage;