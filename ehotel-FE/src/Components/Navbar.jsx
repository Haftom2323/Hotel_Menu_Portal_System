import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <img
            src={"./assets/logo.png"}
            class="mt-2"
            width="300px"
            height="150px"
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-auto">
            <li class="nav-item active pr-5">
              <a class="nav-link" href="landingpage">
                Home
              </a>
            </li>

            <li class="nav-item pr-5">
              <a class="nav-link" href="landingpage#service">
                Services
              </a>
            </li>
            <li>
              <a href="Login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
