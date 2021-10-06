import React, { useEffect, useParams } from "react";
import GameArea from "../components/GameArea";
import GroundZero from "../components/GroundZero";
import ProfileBar from "../components/ProfileBar";
import video from "./../assets/smoked_back.mp4"

const GamePage = ({groundZeroComp}) => {
    // const { urlHint, answer } = useParams();
    // console.log(urlHint, answer);

    // write a function that will execute every 30 minutes and send the user's score from the global state to the backend
    useEffect(() => {
        document.getElementById("video").playbackRate = 0.5
    }, [])

    return (
        <div className="pr-md-2 pr-0" style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}> 
            <div className="h-100 w-100 position-absolute" style={{ opacity: 0.7 }}>
                <video id="video" className="h-100 w-100 position-absolute" style={{ objectFit: "cover" }} autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className="w-full h-100 row">
                {/* levels sidebar */}
                <div className="col-2 d-md-block d-none" style={{ backgroundColor: "#251D1D" }}></div>
                <div className="col-md-10 col-12 d-flex flex-column h-100">
                    {/* the question area */}
                    <div className="min-vh-75 my-1 mx-1 mx-md-0 p-1">
                        {/* normal game area */}
                        <GameArea />
                        {/* game area for static first level */}
                        {/* <GroundZero /> */}
                    </div>
                    {/* the profile bar */}
                    <div className="min-vh-25 my-1 mx-1 mx-md-0 p-1">
                        <ProfileBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;
