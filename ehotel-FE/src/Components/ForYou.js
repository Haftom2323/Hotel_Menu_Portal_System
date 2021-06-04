import React, { Component } from 'react';
import Jobs from './utils/Jobs2';
import { Typography, Tag } from 'antd';
import{Row,Col} from 'react-bootstrap';
import JobDetail from './JobDetailFetch';
import { Button } from 'react-bootstrap';
const { Text,Title } = Typography;


class ForYou extends Component{
  JobItems = Jobs.map((job) =>
    <li key={job.title} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
      <Row>
        <Col><Tag color='#f57b25'>{job.type}</Tag></Col>
      </Row>
      <Row>
        <Col style={{ padding: '5px 0' }} onClick={()=>this.handleClick(job)}><Text>{job.title}</Text></Col>
      </Row>
      <Row>
        <Col><span style={{ fontSize: '12px' }}>{job.location}</span></Col>
      </Row>

    </li>);
  state ={
    show:false,
    job:this.JobItems[0]
  }
  handleClick = (SelectedJob)=>{
 
    this.setState(()=>{
        return{
        show : true,
        job:SelectedJob
        };
    })
}
  render (){  
    if(!this.state.show)
      {return (
        <div style={{ maxHeight: '1200px', paddingRight: '5px', overflowY: 'auto', overflowX: 'hidden' }}>
        <Title level={4} className='title' style={{ paddingBottom: '10px' }}>Jobs For You</Title>
        <ul style={{ listStyle: 'none', marginTop: '10px' }}  >{this.JobItems}</ul>
        </div>
      );} else {
        return (<>
          <ul style={{ listStyle: 'none', marginTop: '10px' }}>{JobDetail(this.state.job)}</ul>
          
          </>
        );
      }
    };
    
}

export default ForYou;
