import React from "react"
import "./Loader.css"

const MainLoader = () => {
    return (
        <div className="lds-ring mx-auto">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    )
}

export default MainLoader