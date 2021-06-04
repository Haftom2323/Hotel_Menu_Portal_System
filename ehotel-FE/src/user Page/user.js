import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col, Button } from "antd";
import User from "./usr";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Grid from "antd/lib/card/Grid";
import { Typography } from "antd";
import Hotels from "./htls";
import HotelView from "./hotelView";
import TotalHotels from "./totalHotels";
import Index from "./index";
import Profile from "./profile";
import More from "./moreHotels";
const { Text } = Typography;
class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      user: User[0],
      hotels: Hotels,
      selectedHotel: "",
      Content: ""
    };
  }
  handleClick = hotel => {
    this.setState({ selectedHotel: hotel, Content: "selected" });
  };
  handleContent = content => {
    this.setState({ Content: content });
  };
  render() {
    console.log("this.state.selectedHotel from=", this.state.selectedHotel);
    return (
      <div>
        <Navbar
          handleContent={this.handleContent}
          handleClick={this.handleClick}
        />
        {this.state.Content == "home" ? (
          <Index />
        ) : this.state.Content == "profile" ? (
          <Profile />
        ) : this.state.Content == "more" ? (
          <More />
        ) : this.state.Content == "selected" ? (
          <HotelView hotel={this.state.selectedHotel} />
        ) : (
          <Index />
        )}
      </div>
    );
  }
}

export default UserPage;
