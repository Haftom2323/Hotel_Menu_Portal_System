import React from 'react';
import Jobs from './utils/Jobs';
import { Typography, Row, Col, Badge } from 'antd';

const { Text,Title } = Typography;

console.log(Jobs[0]);

class Category extends React.Component{

 
  JobItems = Jobs.map((job) =>
    <li key={job.title} style={{ marginBottom: '15px' }}>
      <Row>
        <Col span={20}><Text style={{cursor:'pointer'}} onClick={()=>this.props.searchFun(job.category)}>{job.category}</Text></Col>
        <Col span={4}><Badge style={{ backgroundColor: '#f57b25' }} count={12} /></Col>
      </Row>
    </li>);
render(){
  return (<>
    <Title level={4} className='title'>Job Categories</Title>
    <ul style={{ listStyle: 'none', marginTop: '10px'}} >{this.JobItems}</ul>
  </>);
};
}
export default Category;
