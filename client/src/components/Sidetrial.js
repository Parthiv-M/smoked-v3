import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { propTypes } from "react-bootstrap/esm/Image";
import instagram from "./Images/instagram.png";
import Discord from "./Images/Discord.png";
import Facebook from "./Images/facebook.png";
import Linkedin from "./Images/linkedin.png";
import Twitter from "./Images/Twitter.png";
import log from "./Images/log.png";
import button from "./Images/button.png"


const Side=()=> {
    const [show, setShow] = useState(false);

    //button
    const buttonStyle={
        position:"relative",
        width:"0%",
        height:"20%",
        //left:"31.0%",
        top:"90%",
        opacity:"100%",
    }
    

    const containerStyle={
        backgroundColor:"black",
        marginRight:"0",
        left:"23px",
        width:"85px",
        height:"100%",
        transition:"0.5s",
        opacity:"100%",
        zIndex:"100",
    }


    //sidebar
    

    const SideBar={

        right:"0",
        top:"0",
        width:"0",
        height:"100%",
        backgroundColor:"black",
        transition:"0.5s",
        opacity:"100% !important",
        overflowY:"scroll",

    }

    // The links in the sidebar
    const linkStyle={
        fontSize:"25px",
        textDecoration:"none",
        transition:"0.7s",
        visibility:"visible",
        padding:"0",
    }

    //The social media links in sidebar
    const SocialStyle={
        fontSize:"15px",
        textDecoration:"none",
        transition:"0.7",
    }

    const imageStyle={
        width:"auto",
        height:"17px",
    }
    const lineStyle={
        borderBottom:"5px solid white",
        width:"203px",
        marginLeft:"45px",
    }

    //made with love part transition
    const endStyle={
        transition:"0.5s",
    }

    //sidebar toggle scripts

    useEffect(()=>{},[show]);

    const Click=()=>{
        setShow(!show)
        if(show==true)
        {
            document.getElementById("mySidebar").style.width="250px";
            document.getElementById("container").style.marginRight="250px";
            document.getElementById("end").style.fontSize="25px";
            const items=document.getElementsByClassName("links");

            var i=0;

            for(i=0;i<items.length;i++)
            {
                items[i].style.fontSize="25px";
            }
            

        }
        else{
            document.getElementById("mySidebar").style.width="0%";
            document.getElementById("container").style.marginRight="0px";
            document.getElementById("end").style.fontSize="0px";
            const items=document.getElementsByClassName("links")
            
            for(i=0;i<items.length;i++)
            {
                items[i].style.fontSize="0px";
            }

        }           

    }
  
    return (

        //sidebar

        <section className="container position-relative" id="container" style={containerStyle}>
            <div id="mySidebar" className="sidebar position-fixed" style={SideBar}>

                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">My Dashboard</p></a>
                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">Rules</p></a>
                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">Tutorial</p></a>
                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">Leaderboard</p></a>
                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">Answer Log</p></a>
                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">Credits</p></a>
                <a className="links d-block py-2 px-5 text-white text-right" style={linkStyle} id="links"   href="#"><p className="linkp">Announcements</p></a>

                <hr className="line solid" style={lineStyle} />

                <a href="" className="nav-link text-nowrap position-relative text-white text-center px-5" style={SocialStyle}>Discord <img src={Discord} alt="" className="social" style={imageStyle}/></a>
                <a href="" className="nav-link text-nowrap position-relative text-white text-center px-5" style={SocialStyle}>Instagram <img src={Discord} alt="" className="social" style={imageStyle}/></a>
                <a href="" className="nav-link text-nowrap position-relative text-white text-center px-5" style={SocialStyle}>Twitter<img src={Discord} alt="" className="social" style={imageStyle}/></a>
                <a href="" className="nav-link text-nowrap position-relative text-white text-center px-5" style={SocialStyle}>LinkedIn<img src={Discord} alt="" className="social" style={imageStyle}/></a>
                <a href="" className="nav-link text-nowrap position-relative text-white text-center px-5" style={SocialStyle}>Facebook<img src={Discord} alt="" className="social" style={imageStyle}/></a>

                <h2 className="end text-white text-center pt-5" style={endStyle} id="end">Made with love by <img src={log} alt="" className="log" /></h2> 

            </div>

            
            <div className="btn" style={buttonStyle} onClick={Click}><img src={button} alt="" className="button" /></div> 
             
                        
        </section>

    )
}


  
  export default Side;


