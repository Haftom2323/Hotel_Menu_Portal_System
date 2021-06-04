import React, { Component } from "react";
import CountUp from "react-countup";
import AllInculisev from "./image/allinclusive.png";
import RealTime from "./image/real-time.png";
import Managable from "./image/Managable.png";
import Nearby from "./image/nearby.png";
import Subtraction1 from "./image/Subtraction1.jpg";
import Subtraction2 from "./image/Subtraction2.jpg";
import CoverImage from "./image/hotel.png";
import logo from "./image/hotel.png";
import "./style.css";
import SignUp from "../Components/SignUp";
import { Link } from "react-router-dom";
export const Header = () => (
  <nav
    className="navbar navbar-expand-lg  "
    style={{ backgroundColor: "#333333" }}
  >
    <img src={logo} width="75" height="90" class="navbar-brand" />
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
    <div className="collapse navbar-collapse">
      <ul class="navbar-nav m-auto  ">
        <li className="nav-item  ">
          <a className="nav-link text-primary h6 " href="landingpage">
            Home
          </a>
        </li>

        <li className="nav-item  ">
          <a className="nav-link text-primary h6 " href="landingpage#service">
            Services
          </a>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-primary h6 pl-4 pr-4 aa  aa-light "
            to="SignUp"
          >
            Register | Login
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
export const Home = () => (
  <div>
    <div class="d-flex justify-content-between home" id="home">
      <div class="homecontent">
        <p class="text-primary display-3">Hotel Menu Portal System</p>
        <h3>
          A System For Your Best Choice
          <br /> Come And Enjoy With Us
        </h3>
      </div>
      <img
        src={CoverImage}
        class=" Landing_CoverImage"
        width="800"
        height="1000"
      />
    </div>
  </div>
);
const Card = props => (
  <div>
    <div class="card  text-center border-0  ">
      <img
        class="mx-auto d-block mt-5 mb-3"
        src={props.imgsrc}
        width={50}
        height={50}
      />
      <div class="card-body mb-1">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text pb-5">
          Our system Connects you to a Hotel of your Favourite Menus
        </p>
      </div>
    </div>
  </div>
);
const Catagory = props => (
  <div class="col-sm-6    ">
    <h1 class="display-5 text-primary  font-weight-bold text-right">
      <CountUp end={props.total} />
    </h1>
    <p class="lead text-primary text-right mr-5">{props.field}</p>
  </div>
);

export const FindUrJobs = () => (
  <div class="container-fluid FindYourJob" id="FindYourJob">
    <div class="row">
      <div class="col-4 ml-5">
        <form>
          <input
            type="text"
            class="form-control  "
            placeholder="Search menus"
          />
        </form>
      </div>
    </div>
    <div class="container-fluid ">
      <div className="row ">
        <div class="col-5  ">
          <div class=" col-10 pb-4 bg-white  text-info query ">
            <p class="  h5 pt-3">
              <span class="font-weight-bold h1 pr-2">
                <CountUp end={20} />+
              </span>
              Result are Found For Your query
            </p>
            <button class="btn btn-primary  float-right  px-">
              View Result
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Services = () => (
  <div class="row mx-5" id="service">
    <div class="col-3">
      <Card imgsrc={AllInculisev} title="All Inclusive" />
    </div>
    <div class="col-3">
      <Card imgsrc={Managable} title="Managable" />
    </div>
    <div class="col-3">
      <Card imgsrc={RealTime} title="Real Time" />
    </div>
    <div class="col-3">
      <Card imgsrc={Nearby} title="Near You" />
    </div>
  </div>
);
