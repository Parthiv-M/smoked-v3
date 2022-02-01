import React, { useState } from 'react';
import incognito from './../assets/smoked_logo.png';
import mist from "./../assets/logoLight.png";
import video from "./../assets/smoked_back.mp4" ;
import VerifyEmailForm from '../components/Forms/VerifyEmailForm/VerifyEmailForm';


const VerifyEmail = () => { 

    const [vals,setVal] = useState({
        email: "",
    })

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
                <VerifyEmailForm vals={vals} valset={setVal} handleSubmit={handleSubmit}/>
            </div>
            <p className="text-white my-1 lora-regular">Don't have an account? <a href="/signup" style={{ color: "#7027CE", textDecoration: "underline" }}>Sign Up</a></p>
            <p className="text-white my-1 lora-regular">Already have an account? <a href="/signin" style={{ color: "#7027CE", textDecoration: "underline" }}>Sign In</a></p>
        </section>
    )
}


export default VerifyEmail;