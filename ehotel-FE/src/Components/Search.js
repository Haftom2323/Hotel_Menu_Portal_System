import React from 'react';
import { Input, Cascader, Icon, Tag } from 'antd';
import './css/Search.css';
// import { Button, Icon, Label, Menu } from 'semantic-ui-react';
const options = [];

const SearchBar = () => (
  <div style={{ marginBottom: '60px' }}>
    <Input
      placeholder='Search Jobs'
      prefix={<Icon type='search' style={{ color: '#f57b25' }} />}
      suffix={
        <Cascader options={options} placeholder='Filters' />
      }

      style={{ width: '100%', marginBottom: '5px' }}
    />
    <Tag closable color='#f57b25'>#Part Time</Tag>
    <Tag closable color='#f57b25'>#Freelance</Tag>
  </div>
);

export default SearchBar;
