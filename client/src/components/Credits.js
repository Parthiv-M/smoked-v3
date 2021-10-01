import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import hulk from "./Images/hulk.png";
import almity from "./Images/allmity.png";
import mttn from "./Images/mttn.png";
import vector from "./Images/Vectorline.png";
import mist from "./Images/Mistlogo.png";


const Credits= ()=>{
    const sectionStyle={
        backgroundColor:"black",
    }
// Credits and publicity underline
    const underLine={
        position:"relative",
        left:"40%",
        top:"0%",
        borderBottom:"solid #BD00FF",
        maxWidth:"20%",
        marginBotton:"10%",

    }
    const underLinepub={
        position:"relative",
        left:"30%",
        top:"0%",
        borderBottom:"solid #BD00FF",
        maxWidth:"40%",
        marginBotton:"10%",

    }

// almity logo
    const partnerAl={
        position:"relative",
        top:"25%",
        bottom:"2%",
        left:"50%",
        maxHeight:"50%",
        maxWidth:"50%",
    }
//mttn logo
    const partnerMtt={
        position:"absolute",
        left:"5%",
        top:"25%",
        bottom:"2%",
        maxHeight:"50%",
        maxWidth:"50%",

    }
    //left line for credits heading
    const credVectorleft={
        position:"absolute",
        maxWidth:"30%",
        height:"2%",
        left:"15%",
        top:"37%",
        bottom:"3%",
    }
    //right line for credits heading
    const credVectorright={
        position:"absolute",
        maxWidth:"30%",
        height:"2%",
        left:"55%",
        top:"37%",
        bottom:"3%",
    }
    //left line for publicity heading

    const pubVectorleft={
        position:"absolute",
        maxWidth:"40%",
        height:"2%",
        left:"3%",
        top:"85%",
    }

//right line for publicity heading
    const pubVectorright={
        position:"absolute",
        maxWidth:"40%",
        height:"2%",
        left:"57%",
        top:"85%",
    }
//underline for gang
    const underLinegang={
        position:"relative",
        left:"30%",
        top:"0%",
        borderBottom:"solid #BD00FF",
        maxWidth:"45%",
        marginBotton:"10%",

    }
//left line for gang text
    const gangVectorleft={
        position:"absolute",
        maxWidth:"40%",
        height:"2%",
        left:"2%",
        top:"28.5%",
        bottom:"3%",
    }

    //right line for gang text
    const gangVectorright={
        position:"absolute",
        maxWidth:"35%",
        height:"2%",
        left:"63%",
        top:"28.5%",
        bottom:"3%",
    }

    //underline core

    const underLinecore={
        position:"relative",
        left:"15%",
        top:"0%",
        borderBottom:"solid #BD00FF",
        maxWidth:"40%",
        marginBotton:"10%",

    }

//left line for core text
    const coreVectorright={
        position:"absolute",
        maxWidth:"25%",
        height:"3%",
        left:"0%",
        top:"88%",
        bottom:"3%",
    }

//mist logo bottom
    const mistLogo={
        position:"relative",
        left:"37%",
        maxHeight:"30%",
        maxWidth:"30%",

    }

    
    return (
        <section className="first" style={sectionStyle}>
            <div className="container main">

                <div className="head position-relative">

                    <div className="container credits">

                        <img src={vector} alt="" className="vector-credits" style={credVectorleft} />
                        <h1 className="heading text-center text-white pt-5 pb-3 my-4" style={underLine}>CREDITS</h1>
                        <img src={vector} alt="" className="vector-credits" style={credVectorright} />

                    </div>
                    <div className="container publicity">

                        <img src={vector} alt="" className="vector-credits" style={pubVectorleft} />
                        <h2 className="publicity partners text-center text-white pt-5 pb-3 my-4" style={underLinepub} >Publicity partners</h2>
                        <img src={vector} alt="" className="vector-credits" style={pubVectorright} />

                    </div>
                </div>
                
                
                {/*logos of mttn and almity*/}
                <div className="logos d-flex">

                    <img src={mttn} style ={partnerMtt}alt="" className="partners" />
                    <img src={almity} style={partnerAl} alt="" className="partners" />

                </div>


                {/*gang behind and core members text part*/}

                <div className="gang position-relative">
                
                    <div className="container gang">
                        <img src={vector} alt="" className="vector-gang" style={gangVectorleft} />
                        <h1 className="gang text-center text-white pt-5 pb-3 my-4" style={underLinegang}>Gang behind smoked</h1>
                        <img src={vector} alt="" className="vector-gang" style={gangVectorright} />
                    </div>

                    <div className="container core py-5">
                        <h1 className="gang text-center text-white pt-5 pb-3 my-4" style={underLinecore}>Core members</h1>
                    </div>
                    
       
                </div>

                {/* Core members list */}

                <div className="core members">

                <AvatarRows/>
                <AvatarRows/>
                
                </div>

                {/*core members list*/}

                <h1 className="gang text-center text-white pt-5 pb-3 my-4" style={underLinecore}>Organisers</h1>

                <div className="organ members">

                    <AvatarRows/>
                    <AvatarRows/>

                </div>

                {/*volunteers list*/}

                <h1 className="gang text-center text-white pt-5 pb-3 my-4" style={underLinecore}>Volunteers</h1>

                <div className="volunteer members">
                    <AvatarRows/>
                    <AvatarRows/>
                </div>


                {/*end part with mist logo*/}
                <div className="footer position-relative">

                    <div className="footertext">
                        <h2 className="made text-center text-white pt-5">Made while getting SMOKED</h2><br/>
                        <h2 className="text-center text-white py-3">At</h2>
                    </div>
                    
                    <div className="mist logo py-5">
                        <img src={mist} alt="" className="mistlogo" style={mistLogo} />
                    </div>
                   
                </div>


            </div>
        </section>
    );
}

export default Credits;


const AvatarRows=()=>{


    return(
        <div className="row d-flex px-3 py-5">
            <div className="col-4">
                <div className="avatar px-4 d-flex">
                    <img src={hulk} alt="" className="avatar rounded-circle px-4" />
                    <h1 className="name text-white text-center ">The Hulk</h1>
                </div>
            </div>
                <div className="col-4">
                <div className="avatar px-4 d-flex">
                <img src={hulk} alt="" className="avatar rounded-circle px-4" />
        <h1 className="name text-white text-center ">The Hulk</h1>
        </div>
                </div>
                <div className="col-4">
                <div className="avatar px-4 d-flex">
                <img src={hulk} alt="" className="avatar rounded-circle px-4" />
        <h1 className="name text-white text-center ">The Hulk</h1>
        </div>
                </div>
        </div>

    );
}