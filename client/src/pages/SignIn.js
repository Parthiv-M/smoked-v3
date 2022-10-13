import React, { useContext, useState } from 'react';
import incognito from './../assets/smoked_logo.png';
import mist from "./../assets/logoLight.png";
import video from "./../assets/smoked_back.mp4" ;
import SignInForm from '../components/Forms/SignInForm/SignInForm';
import axios from 'axios';
import { SmokedProvider } from '../context';
import { useSmokedDispatch } from '../context';
import { useSmokedState } from '../context';
import { useHistory} from 'react-router-dom';



const SignInPage = () => { 
    const context=useSmokedState()
    const dispatch=useSmokedDispatch()
    const navigate=useHistory()

    const [vals,setVal] = useState({
        email: "",
        password: ""
    })

    // function to check for empty text fields
    const checkEmptyFields = () => {
        if(vals.email=="" || vals.password=="")
        {
            alert("Fields can't be empty")
        }

    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        checkEmptyFields()
        await axios.post('/api/user/signin',vals).then(async (res)=>{
            console.log(res.headers);
            var str="x-auth-token"
            localStorage.setItem('token', res.headers.token);
            let token = localStorage.getItem("token")
            const userdetails={
                username:res.data.userdetails.username,
                level:res.data.userdetails.level,
                score:res.data.userdetails.score,
                token:token
            }
            // localStorage.setItem('userdata',userdetails);
            localStorage.setItem('username', res.data.userdetails.username);
            localStorage.setItem('level', res.data.userdetails.level);
            localStorage.setItem('score', res.data.userdetails.score);
            console.log(userdetails)
            console.log(token)
            await dispatch({type:'set',payload:userdetails});
            console.log(context);
            navigate.push("/gamepage")

            
          })
        
        
        
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
                <SignInForm vals={vals} valset={setVal} handleSubmit={handleSubmit}/>
            </div>
            <p className="text-white my-1 lora-regular">Don't have an account? <a href="/signup" style={{ color: "#7027CE", textDecoration: "underline" }}>Sign Up</a></p>
        </section>
    )
}


export default SignInPage;