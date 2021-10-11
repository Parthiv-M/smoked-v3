import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const MainSideBar = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        let hideBar = document.getElementById("hidebar");
        let hidewidth = hideBar.offsetWidth;
        let sidebar = document.getElementById("dash");
        if(!show) {
            sidebar.style.right = "-" + (hidewidth + 2) + "px";
        } else {
            sidebar.style.right = "0px";
        }
        setShow(!show)
    }

    useEffect(() => {
        handleClick();
    }, [])

    return (
        <div className="h-100 position-absolute dashboard" id="dash" style={{ zIndex: 1000, right: 0 }}>
            <div className="dash-col-1">
                <div className="trapezium" onClick={handleClick}></div>
            </div>
            <div className="dash-col-2 flex flex-column px-3" id="hidebar">
                <div className="d-flex p-md-5 px-4 flex-column justify-content-center align-items-end" style={{ borderBottom: "0.8px solid gray", height: "88%" }}>
                    <Link to="#" className="text-white lora-regular" style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p>Dashboard</p>
                    </Link>
                    <Link to="#" className="text-white lora-regular" style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p>Rules</p>
                    </Link>
                    <Link to="#" className="text-white lora-regular" style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p>Tutorials</p>
                    </Link>
                    <Link to="#" className="text-white lora-regular" style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p>Leaderboard</p>
                    </Link>
                    <Link to="#" className="text-white lora-regular" style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p>Answer Log</p>
                    </Link>
                    <Link to="#" className="text-white lora-regular" style={{ textDecoration: "none", fontSize: "1.4rem" }}>
                        <p>Announcements</p>
                    </Link>
                </div>
                <div className="d-flex flex-column w-100 my-3 align-items-center justify-content-end">
                    <div className="d-flex justify-content-center align-items-center link-bar">
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-discord mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-instagram-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-twitter-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-facebook-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="lni lni-linkedin-original mx-1" style={{ fontSize: "1.5rem" }}></i></a>
                    </div>
                    <div className="my-2 text-dark">
                        <p>Made with love at <span><a className="text-dark" href="https://wearemist.in" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>MIST</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSideBar