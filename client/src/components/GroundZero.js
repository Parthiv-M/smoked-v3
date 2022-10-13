import React from "react"
import mist  from "./../assets/logoLight.png"
import 'bootstrap/dist/css/bootstrap.css';

const GroundZero = () => {
    return (
        <div className="container-fluid w-100 py-4 game-card question-card">
            <div className="d-flex justify-content-between mb-4">
                <img src={mist} alt="MIST Logo" style={{ height: 50 }} className="pl-3 my-md-0 my-2" />
                <img src={mist} alt="MIST Logo" style={{ height: 50 }} className="pl-3 my-md-0 my-2" />
            </div>
            <div style={{ height: "500px", overflowY: "scroll" }} className="scroll-zero">
                <div className="container-fluid d-flex top-para py-3" style={{ fontSize:"1.5rem" }}>
                    <p className="text-white py-5 text-wrap text-break">
                        smoked is a smoked event which people get smoked with somke in smoked smoke and get smoked with much more smoked smoked 
                        which let them to get smoked and float them in smoked of smoke in smoked smoke
                    </p>
                </div>
                <div className="d-flex align-items-center px-2">
                    <div className="bg-white d-md-block d-none" style={{ height: 2, width: "5%" }}></div>
                    <p className="my-auto mx-2 lora-regular text-white" style={{ fontSize: "1.7rem", minWidth: "fit-content" }}>Smoked 00</p>
                    <div className="bg-white" style={{ height: 2, width: "75%" }}></div>
                </div>
                <p className="text-white my-5 px-3" style={{ fontSize: "1.5rem" }}>
                    So, Lets get started.
                    As you can see the link in URL bar for this question( https://smoked.wearemist.in/demolevel/ ). demolevel is the name of the level SMOKED00 which can help u get to answer. 
                    Answer to this level is youareready 
                    So, as we explained in Answer Submission you should change the link into 
                    https://smoked.wearemist.in/demolevel/youareready/
                    That will take you Smoked01 by unlocking the that level. 
                </p>
                <p className="text-white my-5 px-3" style={{ fontSize: "1.5rem" }}>
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

export default GroundZero