import React, { Component } from 'react';
import { Input, Cascader, Icon} from 'antd';
import '../../Components/css/Search.css';
//import users from './utils/userlistAdmin';
class Search extends Component{
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }
  render(){
  return(
    <div style={{ marginBottom: '60px',paddingLeft: '30%' ,paddingTop: '4%'  ,width: '80%' }}>
     <h2 style={{color:'#f57b25',textAlign :"center"}}> User Management</h2>
          <Input
          placeholder='Search'
          prefix={<Icon type='search' style={{ color: '#f57b25' }}
          value={this.state.search}
          onchange={this.updateSearch.bind(this)}
          />}
          suffix={
            <Cascader options={options} placeholder='Filters' />
          }
          style={{ width: '90%' }}
          />
          </div>
  )}
}
const options = [
  {
    value: 'Name',
    label: 'Name',
  },
  {
   value: 'Gender',
    label: 'Gender',
  },
  {
    value: 'EducationLevel',
     label: 'EducationLevel',
   }
];



export default Search;
