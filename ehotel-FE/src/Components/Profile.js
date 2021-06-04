import React from 'react';
import { Avatar, Typography, Button, Col } from 'antd';

const { Title } = Typography;

const Profile = () => (
  <Col style={{ marginBottom: '80px' }} align='center'>
    <Avatar size={100} icon='user' />
    <Title style={{ fontSize: '14px', margin: '10px 0' }}>John Smith Keller</Title>
    <Button  href="/viewprofile" shape='round' style={{ backgroundColor: '#3486d8', color: 'white', fontSize: '14px' }}>View Profile</Button>
  </Col>
);

export default Profile;
