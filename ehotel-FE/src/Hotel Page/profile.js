import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Profile extends Component {
  state = {
    personalInfo: this.props, //details of the user
    firstName: "",
    lastName: "",
    email: "",
    currentPass: "",
    disabled: "eee",
    editDisabled: "",
    newPass: "",
    show: false,
    status: ""
  };
  handleReset = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };
  handleEdit = () => {
    this.setState({ editDisabled: "ss", disabled: "" });
    console.log("edit clicked");
  };
  handleChange = e => {
    console.log("save clicked");
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = () => {
    //to do api call
    console.log("current state", this.state);
    //conside on backend pass
    axios
      .post("http://localhost:8000/api/changeProfile", this.state)
      .then(res => {
        if (res.status == 200) {
          this.setState({ status: res.data });
        }
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  };
  componentDidMount = () => {
    //api call get current info of the user and set to the state
    axios
      .get("http://localhost:8000/api/getCurrentUser")
      .then(res => {
        if (res.status == 200) {
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email
          });
        }
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="m-3">
          <label htmlFor="firstName" className="m-2">
            First Name
            <input
              id="firstName"
              type="text"
              disabled={this.state.disabled}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="m-3">
          <label htmlFor="lastName" className="m-2">
            Last Name
          </label>
          <input
            id="lastName"
            disabled={this.state.disabled}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="m-3">
          <label htmlFor="email" className="m-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            disabled={this.state.disabled}
            onChange={this.handleChange}
          />
        </div>

        <label htmlFor="password" className="m-2">
          Password
        </label>
        <button
          className="btn btn-secondery"
          style={{ backgroundColor: "green" }}
          disabled={this.state.disabled}
          onClick={this.handleReset}
        >
          Change Password
        </button>
        {this.state.show ? (
          <div className="m-3">
            <label htmlFor="lastName" className="m-2">
              Current Password
            </label>
            <input
              type="text"
              type="password"
              id="currentPass"
              onChange={this.handleChange}
            />
            <label htmlFor="lastName" className="m-2">
              New Password
            </label>
            <input
              type="text"
              id="newPass"
              type="password"
              onChange={this.handleChange}
            />
          </div>
        ) : null}
        <br />
        <button
          className="btn btn-primary m-2"
          disabled={this.state.disabled}
          onClick={this.handleSubmit}
        >
          Save Change
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={this.state.editDisabled}
          onClick={this.handleEdit}
        >
          Edit Profile
        </button>
      </div>
    );
  }
}
export default Profile;
