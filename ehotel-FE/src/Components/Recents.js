import React from 'react';
import { Typography } from 'antd';
import Recent from './Recent';

const { Title } = Typography;

const Recents = () => (
  <>
    <Title level={4} className='title'>Recent Posts</Title>
    <Recent />
  </>
);

export default Recents;
