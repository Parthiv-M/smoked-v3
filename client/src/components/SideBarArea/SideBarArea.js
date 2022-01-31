import React, { useEffect, useState } from "react"
import MenuSideBar from "./MenuSideBar/MenuSideBar";
import Sidebar from "./Sidebar/Sidebar";

const SideBarArea = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [sideBarShow, setSideBarShow] = useState(false)

    const handleMenuClick = () => {
        let hideBar = document.getElementById("hidebar");
        let hidewidth = hideBar.offsetWidth;
        let sidebar = document.getElementById("dash");
        if(!showMenu) {
            sidebar.style.right = "-" + (hidewidth + 2) + "px";
        } else {
            sidebar.style.right = "0px";
        }
        setShowMenu(!showMenu)
    }

    const handleSidebarClick = (type) => {
        let sidebar = document.getElementById(`${type}-side`);
        sidebar.style.display = "block";    
        let hidewidth = sidebar.offsetWidth;
        if(!sideBarShow) {
            sidebar.style.right = "-" + (hidewidth) + "px";
        } else {
            sidebar.style.right = "0px";
        }
        setSideBarShow(!sideBarShow)
    }

    useEffect(() => {
        handleMenuClick();
        handleSidebarClick("rules")
        handleSidebarClick("leaderboard")
        handleSidebarClick("answerlog")
        handleSidebarClick("announcements")
    }, [])

    return (
        <>
            <Sidebar handleSidebarClick={handleSidebarClick} type="rules" />
            <Sidebar handleSidebarClick={handleSidebarClick} type="leaderboard" />
            <Sidebar handleSidebarClick={handleSidebarClick} type="answerlog" />
            <Sidebar handleSidebarClick={handleSidebarClick} type="announcements" />
            <MenuSideBar handleSidebarClick={handleSidebarClick} handleMenuClick={handleMenuClick} />
        </>
    )
}

export default SideBarArea