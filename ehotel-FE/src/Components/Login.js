import React, { Component } from "react";
import email from "../LandingPage/image/real-time.png";
import { Header } from "../LandingPage/pages";
import "antd/dist/antd.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Typography, Input } from "antd";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const { Title, Text } = Typography;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      userName: "",
      userType: "",
      user: null,
      failure: ""
    };
  }
  handlePassword = event => {
    this.setState({ password: event.target.value });
    console.log(event.target.value);
    event.preventDefault();
  };
  handleUsername = event => {
    this.setState({ userName: event.target.value });
    console.log(event.target.value);
    event.preventDefault();
  };

  handleselect = event => {
    this.setState({ userType: event.target.innerText });
    console.log(event.target.value);
  };
  handlesubmit = () => {
    if (this.state.userName && this.state.password) {
      Axios.post("http://localhost:8000/api/login", this.state)
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.setState({
              userType: response.data.userType,
              user: response.data
            });
          } else {
            this.setState({ failure: "password or user name is incorrect" });
          }
          // console.log(" Logged in user", this.state.user.name);
        })
        .catch(e => {
          this.setState({
            failure: "please enter valid password and/or user name "
          }); // this.setState({ failere: e });
        });
    } else {
      this.setState({ failure: "Please enter password and user name first" });
    }
  };
  render() {
    if (this.state.userType) {
      return <Redirect to={this.state.userType} />;
    }
    return (
      <div>
        <Row style={{}}>
          <Col style={{ width: "100%" }}>
            <Header />
          </Col>
        </Row>
        <div style={{ marginLeft: "20%" }}>
          <Row>
            <Title style={{ marginTop: "10%", marginBottom: "2%" }}>
              Login form
            </Title>
          </Row>
          {this.state.failure ? (
            <p style={{ color: "red" }}>
              <i>{this.state.failure}</i>
            </p>
          ) : null}
          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <label>User Name</label>
              <Input
                placeholder="User Name"
                onChange={this.handleUsername.bind(this)}
                name="userName"
                style={{
                  width: "41%",
                  marginBottom: "5px",
                  borderRadius: "20px"
                }}
              />
              <img
                src={email}
                style={{
                  color: "#f57b25",
                  width: "20px",
                  height: "20px",
                  marginLeft: "7%"
                }}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <label> Password:</label>
              <Input.Password
                onChange={this.handlePassword.bind(this)}
                placeholder="password"
                name="password"
                style={{ marginBottom: "5px", width: "20%" }}
              />
            </Col>
          </Row>

          <Form>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                style={{ color: "#f57b25" }}
              />
            </Form.Group>
          </Form>
          <Row style={{ marginBottom: "1%" }}>
            <Button
              type="submit"
              onClick={this.handlesubmit}
              style={{ width: "20%", backgroundColor: "blue" }}
            >
              Login
            </Button>
          </Row>
          <Row style={{ fontSize: "18px" }}>
            <Text>Forget Your Password? </Text>
            <a
              className="ml-2"
              href="/forgotPassword"
              style={{ color: "#f57b25" }}
            >
              Click Here
            </a>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
