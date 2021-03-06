import React, { Component } from 'react';
import { Tag, Input, Tooltip, Icon } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row} from 'react-bootstrap'
import Profileview  from './utils/Profile';

class AddDisplaySkill extends React.Component {
  state = {

    tags:[Profileview.map((tags)=>
      tags.skills.map((tag,index)=>{
        const isLongTag = tag.length > 20;
         return <Tag key={tag} closable={index !== 0} color='white' onClose={() => this.handleClose(tag)} style={{backgroundColor:'rgb(245, 123, 37)',color:'white',border:0}}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
      })
      )],
    inputVisible: false,
    inputValue: '',
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log("bbb",tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)} style={{ backgroundColor:'white',paddingBottom:'5%',border:'0'}}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 ,backgroundColor:'rgb(245, 123, 37)',color:'white'}}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
             
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} c style={{ background: 'rgb(245, 123, 37)',color:'white' }}>
            <Icon type="plus" />Add your Skill
          </Tag>
        )}
      </div>
    );
  }
}

export default AddDisplaySkill;