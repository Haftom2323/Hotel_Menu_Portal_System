import React, { Component } from "react";
import { Row, Col } from "antd";
import { Button } from "react-bootstrap";
import axios from "axios";
class forgotPassword extends Component {
  state = { email: "", success: "" };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
    //console.log(e.target.value);
  };
  handlePasswordReset = () => {
    // console.log("you can reset ", this.state.email);
    axios.post("http://localhost:8000/api/forgotPassword", this.state);
  };
  render() {
    return (
      <div>
        <Row className="mt-50" style={{ marginTop: 200, marginLeft: 100 }}>
          <Col style={{ textAlign: "center" }}>
            <div className="card w-75" style={{ backgroundColor: "#DDDDDD" }}>
              <div className="card-body">
                <h2
                  className="card-title"
                  style={{ textAlign: "center", color: "blue" }}
                >
                  Enter yor email to reset your password
                </h2>
                <h4 className="card-text">
                  <input
                    type="email"
                    id="email"
                    placeholder="enter your email"
                    onChange={this.handleEmailChange}
                  />
                </h4>
                <h4 className="card-text"></h4>
                <h4 className="card-text"></h4>
                <button
                  className="btn btn-primary"
                  onClick={this.handlePasswordReset}
                >
                  Send Email
                </button>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default forgotPassword;
