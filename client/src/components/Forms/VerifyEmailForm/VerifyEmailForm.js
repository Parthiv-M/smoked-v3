import React from "react"
import styles from "./../forms.module.css"
import verfiyStyles from "./VerifyEmail.module.css"

const VerifyEmailForm = ({ vals, valset, handleSubmit }) => {

    const stateUpdate = (input) => (e) => {
        valset(prevState => {
            return{ ...prevState, [input]: e.target.value }
        });
    }

    return (
        <div className="d-flex py-1 px-1 justify-content-center text-left">
            <form autoComplete="off" className={`${styles["form-box"]} py-4 px-md-5 px-3 text-white`} style={{ backgroundColor:"rgba(37, 29, 29, 0.7)", borderRadius:"10px" }}>
                <h1 className="lora-bold text-white text-center">Verify<b className="bold" style={{ color: "#7027CE" }}> Email</b></h1>
                <p className={`${verfiyStyles["verify-label"]} text-center`}>We will send a verification code to your registered email ID</p>
                <div className="form-group my-4">
                    <label className={`lora-regular ${styles.label}`}>Email</label>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="new-pass" onChange={stateUpdate("email")} placeholder={vals.username}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <button type="submit" style={{ backgroundColor:"#7027CE", borderRadius: "1.5rem" }} onClick={(e) => handleSubmit(e)} className="btn px-4 float-end text-white">Verify</button>
            </form>
        </div>
    )
}

export default VerifyEmailForm