import React, { Component } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
class Results extends Component {
  state = {
    menu: ""
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <div class="container-fluid FindYourJmenu" id="FindYourmenu">
          <div class="row">
            <div class="col-4 ml-5">
              <input
                type="text"
                class="form-control  "
                placeholder="Search menus"
                id="menu"
                onChange={this.handleChange}
              />
              <button
                class="btn btn-primary  float-right "
                onClick={() => this.props.onSearch(this.state.menu)}
              >
                Search
              </button>
            </div>
          </div>
          <div class="container-fluid ">
            <div className="row ">
              <div class="col-5  ">
                <div class=" col-10 pb-4 bg-white  text-info query ">
                  <p class="  h5 pt-3">
                    <span class="font-weight-bold h1 pr-2">
                      {this.props.count}+
                    </span>
                    Result are Found For Your query
                  </p>
                  <Link to={"/login"}>
                    <button class="btn btn-primary  float-right  px-">
                      View Result
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Results;
