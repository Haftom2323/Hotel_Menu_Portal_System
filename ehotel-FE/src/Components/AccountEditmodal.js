import React from 'react';
import {Button,Modal,Row,OverlayTrigger} from 'react-bootstrap';
import editicon from '../assets/editicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/JobSeekerDetails.css';
import "react-datepicker/dist/react-datepicker.css";
import { Col ,Radio,Icon,message} from 'antd';
import DatePicker from "react-datepicker";

class EditAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
       show:false,
       value:this.props.dataAccount.Gender,
       date: new Date(),
       error:"",
       newpassword:"",
       confirmpassword:"",
       editedAccount:{
        FirstName:this.props.dataAccount.FirstName,
        LastName:this.props.dataAccount.LastName,
        Email:this.props.dataAccount.Email,
        PhoneNumber:this.props.dataAccount.PhoneNumber,
        BirthDate:this.props.dataAccount.BirthDate,
        Gender :this.props.dataAccount.Gender,
        cv:this.props.dataAccount.cv,
        password:this.props.dataAccount.Password
       }
  };
  } 
handleClose = () =>
 {
   this.setState(
  {show:false});
  }
handleShow = () => 
  {
    this.setState(
   {show:true});
   }
validate=()=>{
  if (this.state.newpassword===this.state.confirmpassword)
  {
    this.setState({
      error:''
    })
    return true

  }else{
    this.setState({
      error:'password mismatch'
    })
    return false

  }
}
handlesubmitdata=(e)=>{
 
    let isvalid=this.validate()
    if (isvalid){
      this.setState(
        {show:false})
      this.props.EditAccountaction(this.state.editedAccount)
    }
  }
handleedit=(e)=>{
 let editedAccount=this.state.editedAccount;
 editedAccount[e.target.name]=e.target.value
    this.setState(
      {
         editedAccount:editedAccount,   
      }
    )
   }
onchangepassword = (e)=>{
 this.setState({
   [e.target.name]:e.target.value
 })
}
onChangegender = e => {
  let newg=this.state.editedAccount.Gender;
     newg=e.target.value;
  console.log("gender",newg)
     this.setState({
          editedAccount:{Gender:newg}
    });
   
  };
   handleChangebirthdate = date => {

      this.setState({
            date,
            editedAccount:{BirthDate:date}
      });
      console.log("new date",this.state.editedAccount.BirthDate)
  };
onChangeHandler=event=>{
  let newcv=this.state.editedAccount.cv;
  newcv=event.target.files[0];
    this.setState({
        editedAccount:{cv:newcv}
    })
}
render()

{
  console.log("pass",this.state.editedAccount.Password)


return (
     <>
 <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay=
    {  
    <div 
    style={{
        backgroundColor: 'rgb(245, 123, 37)',
        paddingTop: '10px',
        color: 'white',
        borderRadius:10,
        height:'50px'
      }}
    >
     Edit Your Account <strong>Here</strong>
    </div>
    }
  >
<button  className="edit" style={{backgroundColor:'rgb(52,134,216)'}} onClick={this.handleShow}>
    Edit<img src={editicon} style={{height:'20px'}} alt='Logo' />
</button>
</OverlayTrigger>
  <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" className="accountmodal"show={this.state.show} onHide={this.handleClose} animation={false}>
    <Modal.Header  
        style={{ paddingLeft:'30%',
        borderBottom : '3px solid  rgb(245, 123, 37,0.2) ',
        fontFamily:"Montserrat",
        fontSize: '25px'}}
        closeButton>
        <Modal.Title> <h5 style={{ color: 'rgb(52,134,216)'}}>Edit your Account</h5></Modal.Title>
    </Modal.Header>
<Modal.Body > 
  <div>
  <li style={{ listStyle: 'none'}}>
  <form class="pt-4">
    <Row>
      <Col xs={8} >
      <label class="label1 pl-2"> First Name</label>
      <input type="text" class="formcontrol" name='FirstName'onChange={this.handleedit} defaultValue ={this.state.editedAccount.FirstName}/>
      </Col>
      <Col xs={6} offset={5}>
       <label class="label1">  Last Name</label>
       <input type="text" class="formcontrol pl-3" name='LastName'onChange={this.handleedit} defaultValue ={this.state.editedAccount.LastName}/>
        </Col>
      </Row>
      <Row>
        <Col xs={8} >
        <label  class=" label1 pl-2 pt-4 ">Email</label>
         <input type="text" class="formcontrol  " name='Email' onChange={this.handleedit} defaultValue ={this.state.editedAccount.Email}/>
         </Col>
         <Col xs={6} offset={5} >
         <label  class=" label1 pt-4 pb-3">Phone Number</label>
          <input type="text" class="formcontrol" name='PhoneNumber'onChange={this.handleedit} defaultValue ={this.state.editedAccount.PhoneNumber}/>
         </Col>
       </Row>
        <Row>
         <Col xs={8} >
         <label  class=" label1 pt-4 pl-3">Birth Date</label>
          <DatePicker  class="formcontrol"
              selected={ this.state.date }
              value={this.state.editedAccount.BirthDate}
          onChange={this.handleChangebirthdate}
          dateFormat="dd/MM/yyyy"
           />
          </Col>
          <Col xs={6} offset={5}>
          <label  class=" label1 pl-3 pt-5">Gender</label>
        <Radio.Group   class=" label1 pl-3" onChange={this.onChangegender} value={this.state.editedAccount.Gender}>
          <Radio name="female" value={'female'}>Female</Radio>
          <Radio name="male" value={'male'} defaultChecked> Male</Radio>
        </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={8}  >
          <label class="label1 pl-5 pt-5"> Upload cv</label>
          <input type="file" name="cv"  style={{backgroundColor:'#f57b25'}} onChange={this.onChangeHandler}/>
         </Col>
          <Col xs={6} offset={5}>
          <label class="label1l pt-1">Change Password</label>
           <label class="label1 pt-3 pl-3">Old Password</label>
            <input type="password" class="formcontrol pl-3"  
                   name='Password'onChange={this.handleChange} value={this.state.editedAccount.password} defaultValue ={this.state.editedAccount.password}/>
            <label class="label1 pl-3">New Password</label>
            <input type="password" class="formcontrol pl-3"  
                   name='newpassword' value={this.state.newpassword} onChange={this.onchangepassword}/>
            <label class="label1 pl-3">Confirm Password</label>
            <input type="password" value={this.state.confirmpassword}  onChange={this.onchangepassword} class="formcontrol pl-3" 
                  name='confirmpassword'/>
              <div>
                {this.state.error}
              </div>
          </Col>
       </Row>
        
  </form> 
  </li>
  </div>
</Modal.Body>
  <Modal.Footer>
      <Button variant="secondary" onClick={this.handleClose}>
          Close
      </Button>
      <Button variant="primary"   onClick={this.handlesubmitdata}>
          Save Changes
        </Button>
  </Modal.Footer>
</Modal>
      </>
    );
  }
}  
export default EditAccount;