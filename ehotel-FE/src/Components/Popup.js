import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logo.png';
import { Row, Col,Button} from 'react-bootstrap'



class Pop extends Component{
  
  render (){  
    return(<>
        <Row >
            <Col ><img src={Logo} style={{marginLeft:'40%', height: '100px' }} alt='Logo' /></Col>
        </Row>
        <Row ><Col style={{textAlign:'center'}}>Do you want to grant the company that posted the Job the access to your profile? Up on granting access the company can view your resume and the career profile you filled in this site.</Col></Row>
        <Row><Col></Col><Col><Button className="popBtn" type="primary" shape="round" size="large" style={{marginTop:'20px', marginLeft:'50px'}}>Yes</Button></Col> <Col><Button type="default" size="large" shape="round" style={{marginTop:'20px', marginLeft:'50px'}}>No</Button></Col><Col></Col></Row>
    </>)
    };
    
}

export default Pop;
