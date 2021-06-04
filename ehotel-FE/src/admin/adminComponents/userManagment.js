import React, { Component } from 'react';
import '../adminCss/usermanagement.css';
import users from '../adminUtils/userlistAdmin';
import Search from './searchUseradmin';
import { Row, Col } from 'antd';
import StatisticsUsermanagement from "./statisticsUsermanagement";
import ListviewUsermanagment from "./listviewUsermanagment";
import Navigation from '../../Components/Navigation';
class UserManagement extends Component{
    state = { 
        Statistics:"t"
     }
     handleClick = (t)=>{
        const tabline = document.getElementById("tab");
        if(t==="f"){
           tabline.style.marginLeft = "420px";
       }else{
          tabline.style.marginLeft = "420px"; 
       }
        this.setState(()=>{
            return{
                Statistics:t
            };
        })
     }
     userList = users.map((users) =>{
      return {users}
    });
render(){

    return (
      
        <div>
            <Navigation />
          
          <Search />
            <Row>
            <Col span={1} offset={8} >
              <div className="col-3">
                <h3 onClick={() => this.handleClick("t")}>Statistics</h3>
              </div>
              <hr id="tab"/>
              </Col>
              <Col span={1}offset={2}><div className="separator"></div></Col>
              <Col span={9}>  
              <div className="col-3">
                <h3 onClick={() => this.handleClick("f")}>listview</h3>
              </div>
              </Col>
              </Row>
           
          <Row>
            <Col span={12} offset={6}>
            {(this.state.Statistics==="t")?<StatisticsUsermanagement/>:<ListviewUsermanagment/>}
            </Col>
          </Row>
      </div>
      );
}
}
export default UserManagement;
