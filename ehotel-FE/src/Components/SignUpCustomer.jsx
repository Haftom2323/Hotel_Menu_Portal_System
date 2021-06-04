import React, { Component } from "react";
import joi from "joi";
import { Input } from "antd";
import { Redirect } from "react-router-dom";
const axios = require("axios");
const Validation = e => {
  e.preventDefault();
  const { name, value } = e.target;
  const schema = {
    FirstName: joi.string().min(1),
    LastName: joi.string().min(1),
    Email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
  };
  const { error } = joi.validate({ [name]: value }, schema);
  let ErrorMsg = document.getElementById("Error" + name);
  if (error) ErrorMsg.innerHTML = error.details[0].message;
  else ErrorMsg.innerHTML = "";
};

const OnSubmit = e => {
  e.preventDefault();
  const errors = document.querySelectorAll(".errorMsg");
  let flag = false;
  errors.forEach(element => {
    if (element.innerHTML) flag = true;
  });
  if (flag) {
    alert("Please Check your Errors");
  } else {
    //.....
  }
};

class SignUpJobSeeker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      password: "",
      FirstName: "",
      LastName: "",
      repass: "",
      userName: "",
      errors: [],
      failure: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.password === this.state.repass) {
      if (
        this.state.email &&
        this.state.password &&
        this.state.FirstName &&
        this.state.LastName &&
        this.state.userName
      ) {
        axios
          .post("http://localhost:8000/api/customersignup", this.state)
          .then(res => {
            if (res.status == 200) {
              alert(res.data.message);
            }
          })
          .catch(e => this.state.errors.push(e));
      } else {
        this.setState({ failure: "please fill all fields!!!!!!! " });
      }
    } else {
      this.setState({ failure: "Password not matched" });
    }
  };
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#DDDDDD",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}
      >
        <div className="col-6 form">
          <form onSubmit={OnSubmit}>
            <div className="form-row mt-5">
              <div className="col">
                <label>First Name:</label>
                <Input
                  name="FirstName"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onBlur={Validation}
                  onChange={this.handleChange.bind(this)}
                  aria-describedby="ErrorFirstName"
                />
                <small
                  id="ErrorFirstName"
                  className="form-text errorMsg"
                ></small>
              </div>
              <div className="col">
                <label>Last Name:</label>
                <input
                  name="LastName"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onBlur={Validation}
                  aria-describedby="ErrorLastName"
                  onChange={this.handleChange.bind(this)}
                />
                <small
                  id="ErrorLastName"
                  className="form-text errorMsg"
                ></small>
              </div>
            </div>
            <div className="form-group mt-4">
              <label>Email:</label>
              <Input
                name="Email"
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Email"
                onBlur={Validation}
                onChange={this.handleChange.bind(this)}
                aria-describedby="ErrorEmail"
              />
              <small id="ErrorEmail" className="form-text errorMsg"></small>
              <img src={"Image/Icons/mail.png"} alt="" width="30" />
            </div>
            <div className="form-group">
              <label> User Name:</label>
              <input
                type="text"
                name="userName"
                className="form-control"
                id="inputAddress"
                onChange={this.handleChange.bind(this)}
                placeholder="User Name"
              />
              <img src={"Image/Icons/person.png"} alt="" width="30" />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputAddress"
                onChange={this.handleChange.bind(this)}
                placeholder="Password"
              />
              <img src={"Image/Icons/key.png"} alt="" width="30" />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="repass"
                className="form-control"
                id="inputAddress"
                onChange={this.handleChange.bind(this)}
                placeholder="Confirm Password"
              />
              <img src={"Image/Icons/lock.png"} alt="" width="30" />
            </div>
            {this.state.failure ? (
              <p style={{ color: "red" }}>{this.state.failure}</p>
            ) : null}
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block btn-register"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpJobSeeker;
