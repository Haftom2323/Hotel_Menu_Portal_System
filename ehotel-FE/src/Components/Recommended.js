import React from 'react';
import Jobs from './utils/Jobs3';
import { Typography, Row, Col, Tag } from 'antd';

const { Text,Title } = Typography;

class Recommended extends React.Component{

render() {

  const JobItems = Jobs.map((job) =>
    <li key={job.title} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
      <Row>
        <Col><Tag color='#f57b25'>{job.type}</Tag></Col>
      </Row>
      <Row>
        <Col style={{ padding: '5px 0' }} onClick={()=>this.props.handleClick(job,true)}><Text style={{cursor:'pointer'}}>{job.title}</Text></Col>
      </Row>
      <Row>
        <Col><span style={{ fontSize: '12px' }}>{job.location}</span></Col>
      </Row>
     

    </li>);

  return (<>
    <Title level={4} className='title'>Recommended</Title>
    <ul style={{ listStyle: 'none', marginTop: '10px' }}>{JobItems}</ul>
  </>);
};
}
export default Recommended;
