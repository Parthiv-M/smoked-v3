import React from "react"
import styles from "./../forms.module.css"

const SignInForm = ({ vals, valset, handleSubmit }) => {

    const stateUpdate = (input) => (e) => {
        valset(prevState => {
            return{...prevState, [input]: e.target.value}
        });
    }

    return(
        <div className="d-flex py-1 px-1 justify-content-center text-left">
            <form autoComplete="off" className={`${styles["form-box"]} py-4 px-md-5 px-3 text-white`} style={{ backgroundColor:"rgba(37, 29, 29, 0.7)", borderRadius:"10px" }}>
                <h1 className="lora-bold text-white text-center">Sign<b className="bold" style={{ color: "#7027CE" }}>In</b></h1>
                <div className="form-group ">
                    <label className={`lora-regular ${styles.label}`}>Email ID</label>
                    <p className="mb-2" style={{ fontSize: "0.8rem", color: "#7a5e5e" }}>Enter the regstered email ID</p>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="username" onChange={stateUpdate("username")} placeholder={vals.username}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group">
                    <label className={`lora-regular ${styles.label}`}>Password</label>
                    <input type="password" className={`${styles.textfield} form-control shadow-none`} id="password" onChange={stateUpdate("password")}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <button type="submit" style={{ backgroundColor:"#7027CE" }} onClick={(e) => handleSubmit(e)} className="btn float-end text-white">Sign In</button>
            </form>
        </div>
    )
}

export default SignInForm