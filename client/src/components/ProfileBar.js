import React from "react";
import { ProgressBar } from "react-bootstrap";
import StatsGraph from "./StatsGraph";
import { useSmokedDispatch } from "../context";
import { useSmokedState } from "../context";
import { SmokedProvider } from "../context";

const ProfileBar = () => {

    var context=useSmokedState();

    return (
        <div className="w-100 h-100 py-4 container-fluid text-white game-card">
            <div className="row h-100 d-flex align-items-center justify-content-center">
                <div className="col-md-2 col-10 text-center">
                    <img alt="User name" src="https://source.unsplash.com/200x200/?nature,water" style={{ borderRadius:"50%" }}></img>
                </div>
                <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
                    <p className="display-4 lora-regular">{context.username}</p>
                    <div className="d-flex w-75 justify-content-between">
                        <p style={{ fontSize: "1.5rem" }}><span className="lora-bold">Score</span> <span style={{ color:"#7027CE" }} className="lora-regular">{context.score}</span></p>
                        <p style={{ fontSize: "1.5rem" }}><span className="lora-bold">Level</span> <span style={{ color:"#7027CE" }}>{context.level}</span></p>
                    </div>
                    <ProgressBar striped animated className="w-75 my-progress" now={60}/>
                </div>
                <div className="col-md-6 col-12 my-md-0 mt-4">
                    <StatsGraph />
                </div>
            </div>
        </div>
    );
}

export default ProfileBar;