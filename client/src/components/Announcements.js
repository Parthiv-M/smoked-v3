import React from "react";
import '../App.css';
// import '../styles'


import { Scrollbars } from 'react-custom-scrollbars'



const Announcements = () => {
    return (

        <div id="announcement">

            <div className="container ">


                <div className="row heading ">
                    <hr />
                    <div className=" fheading  col text-center "> <ul style={{ color: "#7027CE" }, { fontSize: "20px" }}> Announcements</ul> </div>
                </div>

                <div className="boxes">

                    <div className="row text-left" >
                        <div className="head col text-left" >Hints Unlocked  <span className="badge  me-auto">New!</span></div>
                        <div className="line1"></div>
                    </div>



                    <div className="row text-left">
                        <div className="col">More hints have been unlocked for levels 1 t0 7</div>
                    </div>

                    <div className="row text-right">
                        <div className="line2"></div>
                        <div className="col date ">6th Sept, 2021   12:45</div>
                    </div>

                </div>



                <div className="boxes">

                    <div className="head row text-left" >
                        <div className="col text-left">Levels Added</div>
                        <div className="line1"></div>
                    </div>


                    <div className="row text-left">
                        <div className="col">New Levels have been added</div>
                    </div>

                    <   div className="row text-right">
                        <div className="line2"></div>
                        <div className="col date">6th Sept, 2021   12:45</div>
                    </div>

                </div>




                <div className="boxes">

                    <div className="head row text-left" >
                        <div className="col text-left">Score Updated</div>
                        <div className="line1"></div>
                    </div>

                    <div className="row text-left">
                        <div className="col">Scored of Level 21 has been increased to 500 from 250</div>
                    </div>

                    <   div className="row text-right">
                        <div className="line2"></div>
                        <div className="col date">6th Sept, 2021   12:45</div>
                    </div>

                </div>





                <div className="boxes">

                    <div className="head row text-left" >
                        <div className="col text-left">The Alert!</div>
                        <div className="line1"></div>
                    </div>

                    <div className="row text-left">
                        <div className="col">It's been a 12 hours long game till now! 12 hours left.</div>
                    </div>

                    <   div className="row text-right">
                        <div className="line2"></div>
                        <div className="col date">6th Sept, 2021   12:45</div>
                    </div>

                </div>

            </div>


        </div >
    );
}

export default Announcements;