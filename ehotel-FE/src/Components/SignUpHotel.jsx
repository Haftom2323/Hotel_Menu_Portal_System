import React, { Component } from "react";
const axios = require("axios");
class SignUpHotel extends Component {
  state = {
    errors: [],

    name: "",
    user_name: "",
    password: "",
    repassword: "",
    licence: "",
    email: "",
    location: "",
    phone: "",
    contact_person: ""
  };
  handleClick = () => {
    console.log("called", this.state);

    let formData = new FormData();
    formData.append("file", this.state.licence);
    formData.append("name", this.state.name);
    formData.append("location", this.state.location);
    formData.append("userName", this.state.user_name);
    formData.append("password", this.state.password);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("contactPerson", this.state.contact_person);
    //console.log(formData.getAll);
    if (
      formData.file &&
      formData.name &&
      formData.location &&
      formData.user_name &&
      formData.email &&
      formData.phone &&
      formData.contactPerson
    ) {
      axios
        .post("http://localhost:8000/api/hotelSignup", formData, {
          headers: {
            // Accept: "application/pdf",
            "Content-type": "application/json"
          }
        })
        .then(res => console.log(res.status))
        .catch(e => this.state.errors.push(e));
    } else {
      this.setState({ failure: "Please fill all fields" });
    }
  };
  handlefile = e => {
    this.setState({ licence: e.target.files[0] });
    //console.log(this.state.da);
  };
  handleChange = event => {
    // let data = this.state.data;
    // data[event.target.name] = event.target.value;
    // this.setState({ data: data });
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state[event.target.name]);
  };
  render() {
    return (
      <div
        className="container Cform"
        style={{
          backgroundColor: "#DDDDDD",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}
      >
        <div className="row my-5">
          <div className="col-6">
            {this.state.failure ? (
              <p style={{ color: "red" }}>
                <i>{this.state.failure}</i>
              </p>
            ) : null}
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.handleChange}
                  placeholder="Hotel Name"
                />
                <img src={"Image/Icons/building.png"} alt="" width="30" />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <img src={"Image/Icons/mail.png"} alt="" width="30" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  onChange={this.handleChange}
                  id="inputAddress"
                  placeholder="Location"
                />
                <img src={"Image/Icons/location.png"} alt="" width="30" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="phone"
                  onChange={this.handleChange}
                  placeholder="Phone Number"
                />
                <img src={"Image/Icons/phone.png"} alt="" width="30" />
              </div>
            </form>
            <div className="row asset-container h-50">
              <div className="asset h-100">
                <img
                  src={"Image/Icons/photos.png"}
                  alt=""
                  width="70"
                  height="70"
                />
              </div>
              <div className="col-3 ml-5 mt-5">
                <h6 className="w-100 ml-2">
                  Please Provide Your Legal License Document
                </h6>
                <input type="file" name="licence" onChange={this.handlefile} />
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="contact_person"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Owner Name"
                />
              </div>
              <div className="form-group mt-4">
                <h2>Account</h2>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="user_name"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <img src={"Image/Icons/key.png"} alt="" width="30" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="repassword"
                  onChange={this.handleChange}
                  id="inputAddress"
                  placeholder="Confirm Password"
                />
                <img src={"Image/Icons/lock.png"} alt="" width="30" />
              </div>

              <button
                type="button"
                onClick={this.handleClick}
                class="btn btn-secondary btn-lg btn-block Cbtn-register"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpHotel;
