import React, { useEffect, useParams } from "react";
import GameArea from "../components/GameArea";
import GroundZero from "../components/GroundZero";
import MainSideBar from "../components/MenuSideBar/MenuSideBar";
import ProfileBar from "../components/ProfileBar";
import video from "./../assets/smoked_back.mp4"
import smoked from "./../assets/smoked_logo.png"
import { useSmokedDispatch } from "../context";
import { useSmokedState } from "../context";
import { SmokedProvider } from "../context";
import { useNavigate,useLocation} from 'react-router-dom';
import axios from "axios";

const GamePage = ({groundZeroComp}) => {

    var context=useSmokedState()
    var dispatch=useSmokedDispatch()

    var userdetails={
        username:localStorage.getItem("username"),
        level:localStorage.getItem("level"),
        score:localStorage.getItem("score"),
        
    }
    

    const useQuery = () => new URLSearchParams(useLocation().search);

    const query = useQuery();


    

    
    // const { urlHint, answer } = useParams();
    // console.log(urlHint, answer);

    // write a function that will execute every 30 minutes and send the user's score from the global state to the backend
    useEffect(() => {
        document.getElementById("video").playbackRate = 0.5
        console.log("in game page")
        console.log(context);
        dispatch({type:'set',payload:userdetails});
        const answer = query.get('answer');
        console.log(answer)
        

        
        
        
    }, [])
    var dynamic;

    if(context.level==0)
    {
        dynamic=<GroundZero/>
    }
    else{
        dynamic=<GameArea/>
    }

    return (
        <div className="pr-md-2 pr-0" style={{ overflow: "hidden" }}> 
            <MainSideBar />
            <div className="position-absolute h-100 w-100" style={{ opacity: 0.7 }}>
                <video id="video" className="h-100 w-100 position-absolute" style={{ objectFit: "cover" }} autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className="w-full row h-100">
                {/* levels sidebar */}
                <div className="col-2 d-md-flex flex-column d-none align-items-center" style={{ backgroundColor: "#251D1D" }}>
                    <div className="w-100 my-2">
                        <img src={smoked} className="w-100" alt="Smoked Logo"></img>
                    </div>
                    <button style={{ backgroundColor: "#7027CE", borderRadius: 25, fontSize: "1.3rem" }} className="py-2 w-50 border-0 text-white">Logout</button>
                    <div className="d-flex flex-column w-100 align-items-center my-4 scroll-zero" style={{ height: "80%", overflowY: "scroll" }}>
                        {
                            ["Smoked 00", "Smoked 01", "Smoked 02", "Smoked 03"].map((level, index) => {
                                return (
                                    <p key={index} className="text-white lora-regular" style={{ fontSize: "1.4rem" }}>{level.toUpperCase()}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-10 col-12 d-flex flex-column">
                    {/* the question area */}
                    <div className="min-vh-75 my-1 mx-1 mx-md-0 p-1">
                        {/* normal game area */}
                        {/* <GameArea /> */}
                        {dynamic}
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
