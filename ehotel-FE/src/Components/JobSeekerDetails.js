import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, Icon, Typography, Col, Tag, Input } from "antd";
import "./css/JobSeekerDetails.css";
import Navigation from "./Navigation";
import Search from "./Search";
import { Button, Modal, Row } from "react-bootstrap";
import CompanyName from "./utils/Subscribe";
import Applied from "./utils/AppliedJobs";
import Profileview from "./utils/Profile";
import EditResume from "./ResumeEditmodal";
import EditAccount from "./AccountEditmodal";
import AddDisplaySkill from "./AddSkillUser";
const { Title } = Typography;
const { Text } = Typography;

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Profile: Profileview[0],
      edited: {}
    };
  }
  EditAccountaction = editedataccount => {
    let profileAccount = Profile;
    profileAccount.FirstName = editedataccount.FirstName;
    profileAccount.LastName = editedataccount.LastName;
    profileAccount.Email = editedataccount.Email;
    profileAccount.PhoneNumber = editedataccount.PhoneNumber;
    profileAccount.cv = editedataccount.cv;
    profileAccount.Gender = editedataccount.Gender;
    profileAccount.BirthDate = editedataccount.BirthDate;
    this.setState({
      Profile: profileAccount
    });
  };
  render() {
    return (
      <div>
        <EditAccount
          dataAccount={this.state.Profile}
          EditAccountaction={this.EditAccountaction}
        />
        <h5 class="card-title1 pt-5 pb-3">Account</h5>
        {Profileview.map(account => (
          <li key={account.Email} style={{ listStyle: "none" }}>
            <form class="pt-4">
              <label class="label1"> Full Name</label>
              <input
                type="text"
                class="formcontrol "
                value={this.state.Profile.FirstName}
                disabled
                defaultValue={account.FirstName}
              />
              <label class=" label1 pl-2 ">Email</label>
              <input
                type="text"
                class="formcontrol"
                value={this.state.Profile.Email}
                disabled
                defaultValue={account.Email}
              />
              <label class=" label1 pt-4">Phone Number</label>
              <input
                type="text"
                class="formcontrol"
                value={this.state.Profile.PhoneNumber}
                disabled
                defaultValue={account.PhoneNumber}
              />
              <input
                type="text"
                class="formcontrol"
                value={this.state.Profile.BirthDate}
                disabled
                defaultValue={account.BirthDate}
              />
              <input
                type="text"
                class="formcontrol"
                value={this.state.Profile.Gender}
                disabled
                defaultValue={account.Gender}
              />
              {console.log("newg", this.state.Profile.Gender)}
              {console.log("cvdefualt", this.state.Profile.cv)}
            </form>
          </li>
        ))}
      </div>
    );
  }
}

class CompanyNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyName
    };
  }
  onRemoveSubscribe(remove) {
    let tempCompanylist = this.state.CompanyName;
    tempCompanylist.splice(remove.Companyname, 1);
    this.setState({ CompanyName: tempCompanylist });
  }

  render() {
    return (
      <div>
        {CompanyName.map((company, index) => (
          <li
            key={index}
            style={{
              listStyle: "none",
              paddingTop: "10px",
              marginTop: "30px",
              color: "black"
            }}
          >
            <Row>
              <Col xs={5}>
                <img src={company.ur} style={{ height: "59px" }} alt="Logo" />
              </Col>
              <Col xs={16}>
                {" "}
                <a href={company.URl} target="_blank" rel="noopener noreferrer">
                  <h2 className="subscribeds">{company.Companyname} </h2>
                </a>
                <Col xs={12} offset={1} className="subscribed">
                  <Text>
                    {company.Region},{company.City}
                  </Text>
                </Col>
              </Col>
              <Col>
                <Icon
                  className="closeIcon"
                  onClick={() => this.onRemoveSubscribe(index)}
                  type="close"
                />
              </Col>
            </Row>
          </li>
        ))}
      </div>
    );
  }
}

const Skills = () => {
  return <AddDisplaySkill />;
};

const Profile = () =>
  Profileview.map(e => {
    return (
      <Col style={{ marginBottom: "40px", paddingTop: "3%" }} align="center">
        <img
          src={e.imageURL}
          name="image"
          style={{ height: "100px", width: 100, borderRadius: 100 }}
          alt="profile photo"
        />
        <Title
          style={{
            fontSize: "30px",
            color: "rgb(60,,239,0.4)",
            margin: "10px 0"
          }}
        >
          {" "}
          {e.FirstName} {e.LastName}{" "}
        </Title>
        <Title style={{ fontSize: "15px", color: "f57b25", margin: "10px 0" }}>
          {" "}
          {e.Email}
        </Title>
      </Col>
    );
  });
const Body = () => (
  <div className="row  body">
    <div className="col-xs-4 col-md-6">
      <div class="d-flex m-2 flex-column bd-highlight  pb-5 pt-5">
        <div class="p-2 bd-highlight pt-5 ">
          <div class="card  Account">
            <div class="card-body">
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-5 p-4">
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class=" bd-highlight "></div>
        <div class="bd-highlight  ">
          <div class="card Subscribe">
            <div class="card-body">
              <h5 class="card-title2 pt-5 pb-3 " style={{ color: "black" }}>
                Subscribed Hotels
              </h5>
              <CompanyNames />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JobSeekerDetails = () => (
  <div className=" container-fluid">
    <Navigation />
    <div className="row">
      <div className="col-3"></div>
      <div className="col-12">
        <Profile />
      </div>
      <div className="col-3"></div>
    </div>
    <Body />
  </div>
);
export default JobSeekerDetails;
