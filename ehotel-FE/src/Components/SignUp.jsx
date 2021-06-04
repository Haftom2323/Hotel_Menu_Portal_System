import React, { Component } from "react";
import SignUpJ from "./SignUpCustomer";
import SignUpC from "./SignUpHotel";
import Navbar from "./Navbar";

class SignUp extends Component {
  state = {
    jobseeker: "t"
  };
  handleClick = t => {
    const tabline = document.getElementById("tab");
    if (t == "f") {
      tabline.style.marginLeft = "420px";
    } else {
      tabline.style.marginLeft = "100px";
    }
    this.setState(() => {
      return {
        jobseeker: t
      };
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="container"
          style={{
            backgroundColor: "#DDDDDD",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
          }}
        >
          <div className="row tab-jobs">
            <div className="col-3">
              <h3 onClick={() => this.handleClick("t")}>Customer</h3>
              <hr id="tab" />
            </div>
            <div className="SignUpseparator"></div>
            <div className="col-3">
              <h3 onClick={() => this.handleClick("f")}>Hotel</h3>
            </div>
          </div>
          {this.state.jobseeker == "t" ? <SignUpJ /> : <SignUpC />}
        </div>
      </div>
    );
  }
}

export default SignUp;
