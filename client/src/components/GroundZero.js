import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import incognito from './Images/incognito.png';
import smoked from './Images/Smoked.png';
import mist from './Images/Mistlogo.png';



const groundZero=()=>{
    //style for the component
    const zeroStyle={
        background: "#251D1D",
        opacity: "100%",
        borderRadius: "10px",
        
        overflow:"scroll",
        
    }
    //smoked image underline 1
    const smokedUnder1={
        backgroundColor:"#7027CE",
        width: "45%",
        height: "3%",
        left: "7%",
        top:"85%",
    }

    //smoked image underline 2

    const smokedUnder2={
        backgroundColor:"#7027CE",
        height:"3%",
        width:"22%",
        left: "73%",
        top:"85%",  
    }

    //top paragraph container
    const paraStyle={
        width:"85%",
        fontSize:"175%",
    }

    //left line before smoked heading

    const smokedLeft={
        backgroundColor:"white",
        width: "17%",
        height: "4%",
        left: "0%",
        top:"60%",
    }

    //right line for smoked

    const smokedRight={
        backgroundColor:"white",
        width: "40%",
        height: "4%",
        left: "57%",
        top:"60%",
    }

    //smoked heading (smoked 00)

    const headingSmoke={
        left:"15%",
        borderBottom:"2px solid #7027CE",
        width:"40%",
    }

    //points after heading

    const pointStyle={
        width:"8%",
        left:"85%",
        borderRadius:"20px"
    }
    //Game container style
    const gamedivStyle={
        width:"85%",
    }


    return(
        <div className="container zero position-absolute px-3" style={zeroStyle}>
            <div className="row d-flex">

                <div className="col-2">

                <div className="container py-0 my-0 px-0 mx-0">
                    <img src={incognito} alt="" className="incognito img-fluid py-4" />
                </div>

                </div>


                <div className="col-4 offset-2">

                    <div className="container d-block py-0 my-0 px-0 mx-0 position-relative">

                        <img src={smoked} alt="" className="smoked img-fluid pt-2" />
                        <div className="container mb-5 position-absolute" style={smokedUnder1}></div>
                        <div className="container mb-5 position-absolute" style={smokedUnder2}></div>
                        

                    </div>

                </div>
                

                <div className="col-2 offset-2">

                    <div className="container py-0 my-0 px-0 mx-0">
                        <img src={mist} alt="" className="mist img-fluid py-3" />

                    </div>
                
                </div>
                
            </div>

            <div className="container d-flex top-para py-3" style={paraStyle}>
                
                    <p className="text-white py-5 text-wrap text-break">
                        smoked is a smoked event which people get smoked with somke in smoked smoke and get smoked with much more smoked smoked which let them to get smoked and float them in smoked of smoke in smoked smoke
                    </p>
                
                
            </div>

            <div className="container game position-relative" style={gamedivStyle}>
                <div className="container d-flex head position-relative">
                    <div className="container position-absolute" style={smokedLeft}></div>
                    
                    <h2 className="heading text-center position-relative text-nowrap py-3 mx-3 text-white" style={headingSmoke}>SMOKED-00</h2>
                    
                    
                   
                    <div className="container position-absolute" style={smokedRight}></div>

                </div>

                <div className="points d-flex bg-dark justify-content-center position-absolute" style={pointStyle} >
                    <h4 className="points text-white text-center start-100 p-2 pl-3 "> 100 pts</h4>
                </div>

            </div>

            <div className="container d-flex top-para py-3 text-wrap text-break" style={paraStyle}>
                
                    <p className="text-white py-5 text-wrap text-break ">
                        So, Lets get started.

                        As you can see the link in URL bar for this question( https://smoked.wearemist.in/demolevel/ ). demolevel is the name of the level SMOKED00 which can help u get to answer. 

                        Answer to this level is youareready 

                        So, as we explained in Answer Submission you should change the link into 
                        https://smoked.wearemist.in/demolevel/youareready/

                        That will take you Smoked01 by unlocking the that level. 
                    </p>
                
                
            </div>
            
            
        </div>



    )

}

export default groundZero;