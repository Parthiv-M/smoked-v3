import React from 'react';
import incognito from './../assets/smoked_logo.png';
import mist from "./../assets/logoLight.png";
import video from "./../assets/smoked_back.mp4" ;
import ReactInputVerificationCode from "react-input-verification-code";

const VerifyEmail = () => { 

    const [value, setValue] = React.useState("");
    const clearValue = () => setValue("");

    // function to check for empty text fields
    const checkEmptyFields = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <section className="min-vh-100 min-vw-100 text-center" style={{ overflow:"hidden" }}>
            <div className="h-100 w-100 position-fixed" style={{ opacity: 0.3, zIndex: -100 }}>
                <video id="video" className="h-100 w-100" style={{ objectFit: "cover" }} autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className="d-flex w-100 justify-content-between p-3">
                <img src={incognito} alt="Inognito" className="py-4" height={100} />
                <img src={mist} alt="MIST" className="py-3" height={100} />  
            </div>
            <div className="pt-5">
                <div className="d-flex py-1 px-1 justify-content-center text-left">
                    <div autoComplete="off" className={`py-4 px-md-5 px-3 text-white`} style={{ backgroundColor:"rgba(37, 29, 29, 0.7)", borderRadius:"10px" }}>
                        <h1 className="lora-bold text-white text-center mb-4">Verify<b className="bold" style={{ color: "#7027CE" }}> Code</b></h1>
                        <ReactInputVerificationCode length={5} placeholder="." autoFocus={true} onChange={setValue} value={value} />
                        <button 
                            type="submit" 
                            style={{ backgroundColor:"#7027CE", borderRadius: "1.5rem" }} 
                            onClick={(e) => handleSubmit(e)} 
                            className="btn mt-4 px-4 float-end text-white"
                        >Verify</button>
                    </div>
                </div>
            </div>
            <p className="text-white my-1 lora-regular">Don't have an account? <a href="/signup" style={{ color: "#7027CE", textDecoration: "underline" }}>Sign Up</a></p>
            <p className="text-white my-1 lora-regular">Already have an account? <a href="/signin" style={{ color: "#7027CE", textDecoration: "underline" }}>Sign In</a></p>
        </section>
    )
}


export default VerifyEmail;