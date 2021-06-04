import React, { Component } from "react";
import HotelView from "./hotelView";
import TotalHotels from "./totalHotels";
import { Row, Col } from "antd";
import Hotels from "./htls";
import User from "./usr";
class SubscribesHotels extends Component {
  state = {
    user: User[0],
    hotels: Hotels,
    selectedHotel: ""
  };
  handlClick = hotel => {
    this.setState({ selectedHotel: hotel });
    //alert("selected!!!!!!!!!");
  };
  render() {
    return (
      <div>
        <Row>
          <Col lg={{ span: 24 }}>
            {this.state.selectedHotel ? (
              <HotelView hotel={this.state.selectedHotel} />
            ) : (
              <TotalHotels
                hotels={this.state.hotels}
                handlClick={this.handlClick}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default SubscribesHotels;
