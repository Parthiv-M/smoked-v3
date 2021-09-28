import React from "react";
import './App.css';
import logo from "./images/logo.png"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player'



const Sm = () => {
    return (
        <div className="bg">
            <div className="top">
                <img src={logo} className="logo" />
            </div>
            <div className="title_section">
                <div className="line1"></div>
                <div className="title">SMOKED 02</div>
                <div className="line2"></div>

            </div>
            <div className="mainbody">
                <div className="right">
                    <div className="player">
                    <ReactPlayer className="play" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                    </div>
                </div>
                <div className="left">
                    <div className="container">
                        <Accordion className="accordian">
                            <AccordionSummary


                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="acc-header"
                            >
                                <div className="acc-head">
                                    Hint 01
                                </div>
                                <div className="points"> -10 Pts</div>
                            </AccordionSummary>
                            <AccordionDetails className="acc-details">
                                <div className="caption">Caption</div>


                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordian">
                            <AccordionSummary


                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="acc-header"
                            >
                                <div className="acc-head">
                                    Hint 01
                                </div>
                                <div className="points"> -10 Pts</div>
                            </AccordionSummary>
                            <AccordionDetails className="acc-details">
                                <div className="caption">Caption</div>


                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="bottom">
                        <div className="solves">Solves: <span>0000</span> </div>
                        <div className="first">First Blood: <span>0000</span> </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sm
