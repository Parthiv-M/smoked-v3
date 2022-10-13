import React, { useState } from 'react';
import incognito from './../assets/smoked_logo.png';
import mist from "./../assets/logoLight.png";
import SignUpForm from '../components/Forms/SignUpForm/SignUpForm';
import video from "./../assets/smoked_back.mp4" ;


const SignUpPage = () => { 

    const [Num,setNum] = useState(0);
    const [vals,setVal] = useState({
        name: "",
        email: "",
        registrationNum: "",
        college: "",
        userName: "",
        contact: "",
        password: "",
        confPass: ""
    })

   const nextClick = () => {
        setNum(1);
        
    }
    
    const prevClick = () => {
        setNum(0);
    }

    return(
        <section className="min-vh-100 min-vw-100 text-center" style={{ overflow:"hidden" }}>
            <div className="h-100 w-100 position-absolute" style={{ opacity: 0.3, zIndex: -100 }}>
                <video id="video" className="h-100 w-100" style={{ objectFit: "cover" }} autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className="d-flex w-100 justify-content-between p-3">
                <img src={incognito} alt="Inognito" className="py-4" height={100} />
                <img src={mist} alt="MIST" className="py-3" height={100} />  
            </div>
            <div className="pt-5">
                <SignUpForm click1={nextClick} click2={prevClick} vals={vals} valset={setVal} state={Num}/>
                <p className="text-white my-1 lora-regular">Already have an account? <a href="/signin" style={{ color: "#7027CE", textDecoration: "underline" }}>Sign In</a></p>
            </div>
        </section>
    )
}


export default SignUpPage;