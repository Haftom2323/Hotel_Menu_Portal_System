import React, { Component } from "react";
import { Link } from "react-router-dom";
class passwordChange extends Component {
  state = { password: "", success: "", email: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePasswordChange = () => {
    this.setState({ success: "Password changed" });
    console.log(this.state);
  };
  render() {
    return (
      <div style={{ textAlign: "center", margin: 30 }}>
        <div
          className="card"
          style={{ width: "100%", backgroundColor: "#DDDDDD" }}
        >
          <img
            className="card-img-top"
            src="./assets/avatar.png"
            alt="Card image cap"
            style={{ width: 100, height: 100, marginLeft: "50%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Change your password here</h5>
            <p className="card-text">
              <input
                className="m-1"
                type="email"
                name="email"
                placeholder="Enter your new email"
                onChange={this.handleChange}
              />
            </p>
            <p className="card-text">
              <input
                className="m-1"
                type="password"
                name="password"
                placeholder="Enter your new password"
                onChange={this.handleChange}
              />
            </p>
            <button
              className="btn btn-success"
              style={{ width: 100, borderRadius: 20 }}
              onClick={this.handlePasswordChange}
            >
              Change
            </button>
            {this.state.success ? (
              <p style={{ color: "green" }}>
                {this.state.success} <Link to="login">Log in</Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default passwordChange;
