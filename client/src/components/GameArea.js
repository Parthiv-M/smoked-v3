import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import ReactPlayer from "react-player";
import mist  from "./../assets/logoLight.png"

import 'bootstrap/dist/css/bootstrap.min.css';

const GameArea = () => {
    return (
        <div className="container-fluid w-100 py-4 game-card question-card">
          <div className="d-flex justify-content-between mb-4">
              <img src={mist} alt="MIST Logo" style={{ height: 50 }} className="pl-3 my-md-0 my-2" />
              <img src={mist} alt="MIST Logo" style={{ height: 50 }} className="pl-3 my-md-0 my-2" />
          </div>
          <div className="d-flex align-items-center">
              <div className="bg-white d-md-block d-none" style={{ height: 2, width: "5%" }}></div>
              <p className="my-auto mx-2 lora-regular text-white" style={{ fontSize: "1.7rem", minWidth: "fit-content" }}>Smoked 01</p>
              <div className="bg-white" style={{ height: 2, width: "75%" }}></div>
          </div>
          <div className="d-flex justify-content-end my-2 align-items-center">
              <p className="px-3 py-2 lora-regular my-auto" style={{ fontSize: "1.3rem", backgroundColor: "#251D1D", color: "#7027CE", borderRadius: "1rem" }}>100 Points</p>
          </div>
          <div className="row">
              <div className="col-md-7 h-100 col-12 d-flex justify-content-center align-items-center">
                  {/* if video or audio */}
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
                  {/* if image */}
                  {/* <img className="w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1n8TDX1XKcHfycG-QVaGrM5gyyEJ7luh0hKlZJjP2qfkr32jtxzpgfWDR-kFjjVKHiy8&usqp=CAU"/> */}
              </div>
              <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center scrollable-hints scroll-zero" style={{ height: "400px", overflowY: "scroll" }}>
                  <div className="d-flex flex-column align-items-md-start align-items-center w-100 my-4">
                      <p className="m-0 display-4 lora-regular" style={{ color: "#7027CE" }}>1234</p>
                      <p className="text-white lora-bold" style={{ fontSize: "1.3rem" }}>Total Solves</p>
                  </div>
                  <Accordion defaultActiveKey="0" className="hint align-self-start text-white">
                    <Accordion.Item className="hint-item my-2">
                      <Accordion.Header>Hint 1</Accordion.Header>
                      <Accordion.Body>
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion defaultActiveKey="1" className="hint align-self-start text-white">
                    <Accordion.Item className="hint-item my-2">
                      <Accordion.Header>Hint 2</Accordion.Header>
                      <Accordion.Body>
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><Accordion defaultActiveKey="1" className="hint align-self-start text-white">
                    <Accordion.Item className="hint-item my-2">
                      <Accordion.Header>Hint 2</Accordion.Header>
                      <Accordion.Body>
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </div>
          </div>
        </div>
    );
}

export default GameArea;