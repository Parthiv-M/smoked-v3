import React from "react"
import styles from "./../forms.module.css"

const ResetForm = ({ vals, valset, handleSubmit }) => {

    const stateUpdate = (input) => (e) => {
        valset(prevState => {
            return{ ...prevState, [input]: e.target.value }
        });
    }

    return (
        <div className="d-flex py-1 px-1 justify-content-center text-left">
            <form autoComplete="off" className={`${styles["form-box"]} py-4 px-md-5 px-3 text-white`} style={{ backgroundColor:"rgba(37, 29, 29, 0.7)", borderRadius:"10px" }}>
                <h1 className="lora-bold text-white text-center">Reset<b className="bold" style={{ color: "#7027CE" }}> Password</b></h1>
                <div className="form-group my-4">
                    <label className={`lora-regular ${styles.label}`}>New Password</label>
                    <input type="text" className={`${styles.textfield} form-control shadow-none`} id="new-pass" onChange={stateUpdate("newPass")} placeholder={vals.username}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <div className="form-group my-4">
                    <label className={`lora-regular ${styles.label}`}>Confirm Password</label>
                    <input type="password" className={`${styles.textfield} form-control shadow-none`} id="confirm-password" onChange={stateUpdate("confirmPass")}/>
                    <span className={`${styles.underline}`}></span>
                </div>
                <button type="submit" style={{ backgroundColor:"#7027CE", borderRadius: "1.5rem" }} onClick={(e) => handleSubmit(e)} className="btn px-4 float-end text-white">Reset</button>
            </form>
        </div>
    )
}

export default ResetForm