import React from 'react';
import { Typography } from 'antd';
import Recommended from './Recommended';

const { Title } = Typography;

const Recommendeds = () => (
  <>
    <Title level={4} className='title'>Recommended</Title>
    <Recommended />
  </>
);

export default Recommendeds;
