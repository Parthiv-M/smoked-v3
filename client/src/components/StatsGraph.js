import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,  Breadcrumb, BreadcrumbItem, Container, Row, Col,ProgressBar} from "react-bootstrap"
import {Card, CardImg,} from "react-bootstrap"
import{Line} from 'react-chartjs-2'

const style = {
    position: "absolute",
    width: "1430px",
    height: "252px",
    left: "30px",
    top: "754px",

    backgroundColor: "#251D1D",
    opacity: "",
    borderRadius: "15px",
    color:"white"
  };
const styleTitle = {
    position: "relative",
    top: "60px",
    fontSize: "50px"

};
const styleLevel = {
    position: "relative",
    top: "19px",
    fontSize: "20px",
    left: "160px"

};
const styleScore = {
    position: "relative",
    top: "65px",
    fontSize: "20px",
    left: "20px"

};
const styleGraph = {
    position: "relative",
    width: "730px",
    height: "220px",
    left: "30px",
    top: "25px",
    backgroundColor:" #000000"  ,

   
    opacity: "",
    borderRadius: "15px"
    
};
const styleImage ={

    borderRadius:"50%",
    position: "relative",
    top:"20px",
    left:"20px"
};
const styleSpan ={
    color:" #7027CE"  

};
const styleBar={
    backgroundColor:" #000000" , 
    width: "150px",
    height: "8px",
    position:"relative",
    left:"18px",
    top:"20px",
    color:"#000000"  

};

const StatsGraph = () => {
    return (
        <div>
            <Container fluid="lg">
                <Card style={style} >
                    <Row>
                        <Col xs={2}>
                            <Card.Img style={styleImage} src="https://source.unsplash.com/200x200/?nature,water" />
                        </Col>
                        <Col xs={3}>
                            <Card.Body>
                                <Card.Title style={styleTitle}> Orkin King</Card.Title>
                                <Card.Text style={styleScore}>Score:  <span style={styleSpan}>  420</span></Card.Text>
                                <Card.Text style={styleLevel}>Level:  <span style={styleSpan}>  69</span></Card.Text>
                                <ProgressBar style={styleBar} now={60} />
                            </Card.Body>
                        </Col>
                        <Col xs={7}>
                            <Card style={styleGraph}>
                                <Line
                                     data={{
                                         labels:['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
                                         datasets:[{
                                             label:'Top Score',
                                             data:['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
                                             backgroundColor:[
                                                'white'
                                             ],
                                             borderColor:[
                                                'white'
                                             ],
                                             
                                             borderWidth: 1
                                            
                                         },
                                         {
                                             label:'My Score',
                                             data:['1',  '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13'],
                                             backgroundColor:[
                                                 'purple'
                                                ],
                                                borderColor:[
                                                    'purple'
                                                ],
                                            },
                                            {
                                                label:'Average Score',
                                                data:['1', '4', '5', '6','7', '8', '9', '10', '11', '12','13','14'],
                                                backgroundColor:[
                                                    'white'
                                                 ],
                                                 borderColor:[
                                                    'white'
                                                 ]
                                            },
                                        ]
                                     }}                             
                                     Height={400}
                                     width={600} 
                                     options={{
                                         maintainAspectRatio:false,
                                         scales: {
                                            y: {
                                               title: true,
                                               Text:' #time passed'
                                            }
                                        }
                                     }}  
        
                                />

                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default StatsGraph;