import React from "react";
import TeamMemberCard from "../components/TeamMemberCard/TeamMemberCard";
import mist from "./../assets/logoLight.png";
import { Link } from "react-router-dom";
import { board } from "./../constants/board"

const TeamPage = () => {

    return (
        <div style={{ minHeight: "100vh" }}>
            <div className="container py-5">
                <div className="position-relative d-flex flex-column my-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="w-50 bg-white d-md-block d-none" style={{ height: "1px" }}></div>
                        <h1 className="lora-bold mx-4 text-center text-white">
                            CREDITS
                        </h1>
                        <div className="w-50 bg-white d-md-block d-none" style={{ height: "1px" }}></div>
                    </div>
                </div>
                <div className="position-relative d-flex flex-column my-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="lora-bold mx-4 pb-2 text-center text-white" style={{ borderBottom: "3px solid #7027CE" }}>
                            Publicity Partners
                        </h1>
                    </div>
                    {/*logos of partners*/}
                    <div className="d-flex flex-md-row flex-column justify-content-between align-items-center py-md-5 py-3">
                        <img src={mist} alt="MIST Logo" className="mist-logo pl-3 my-md-0 my-2" />
                        <img src={mist} alt="MIST Logo" className="mist-logo pl-3 my-md-0 my-2" />
                        <img src={mist} alt="MIST Logo" className="mist-logo pl-3 my-md-0 my-2" />
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-4 align-items-center">
                    <h1 className="lora-bold mx-4 pb-2 text-center text-white" style={{ borderBottom: "3px solid #7027CE" }}>
                        The Team
                    </h1>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                        <div className="bg-white d-md-block d-none" style={{ height: "1px", width: "3%" }}></div>
                        <h1 className="lora-bold mx-3 pb-2 text-center text-white">
                            Core Committee
                        </h1>
                        <div className="bg-white d-md-block d-none" style={{ height: "1px", width: "60%" }}></div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row grid-1 w-full px-3 py-5 justify-content-center">
                        {
                            board.map((person) => {
                                return <TeamMemberCard key={person._id} data={person}/>
                            })
                        }
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                        <div className="bg-white d-md-block d-none" style={{ height: "1px", width: "3%" }}></div>
                        <h1 className="lora-bold mx-3 pb-2 text-center text-white">
                            Organisers
                        </h1>
                        <div className="bg-white d-md-block d-none" style={{ height: "1px", width: "70%" }}></div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row grid-1 w-full px-3 py-5 justify-content-center">
                        {/* organiser cards */}
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                        <div className="bg-white d-md-block d-none" style={{ height: "1px", width: "3%" }}></div>
                        <h1 className="lora-bold mx-3 pb-2 text-center text-white">
                            Volunteers
                        </h1>
                        <div className="bg-white d-md-block d-none" style={{ height: "1px", width: "70%" }}></div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row grid-1 w-full px-3 py-5 justify-content-center">
                        {/* volunteer cards */}
                    </div>
                </div>
                
                <div className="position-relative my-5 d-flex flex-column justify-content-center align-items-center">
                    <Link to="/">
                        <button className="px-3 py-2 border my-3" style={{ borderRadius: "20px" }}>Back to Game</button>
                    </Link>
                    <p className="text-white lora-regular text-center m-0" style={{ fontSize: "1.5rem" }}>A Web Based Cryptic Hunt By</p>
                    <p className="text-white lora-bold text-center" style={{ fontSize: "1.5rem" }}>Manipal Information Security Team    </p>
                    <img src={mist} alt="MIST Logo" className="mist-logo pl-3" />
                </div>
            </div>
        </div>
    );
}

export default TeamPage;