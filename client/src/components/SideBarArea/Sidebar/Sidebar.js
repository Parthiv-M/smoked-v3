import React from "react"
import styles from "./Sidebar.module.css"

import Rules from "../../RulesItem/Rules"
import LeaderBoard from "../../LeaderBoard/LeaderBoard"

const Sidebar = ({ handleSidebarClick, type }) => {

    const findComponent = () => {
        switch(type) {
            case "rules":
                return <Rules />
            case "leaderboard":
                return <LeaderBoard />
            case "answerlog":
            case "announcements":
            default: 
                return null
        }
    }

    return (
        <div id={`${type}-side`} className={`h-100 position-fixed ${styles.sidebar}`} style={{ zIndex: 1000, right: 0 }}>
            <div className="d-flex justify-content-start p-3">
                <i className="lni lni-cross-circle text-white" onClick={() => handleSidebarClick(type)} style={{ cursor: "pointer", fontSize: "1.5rem" }}></i>
            </div>
            <div className={`flex flex-column px-3 h-100`} id="sidebar">
                {findComponent()}
            </div>
        </div>
    )
}

export default Sidebar