import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { Row, Col } from "antd";
import { Carousel } from "react-bootstrap";
import { AlcholicDrinks, softDrinks, fasting, swimmingPool } from "./menus";
import Axios from "axios";
class HotelView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      softDrinks: softDrinks,
      AlcholicDrinks: AlcholicDrinks,
      fastingFoods: fasting,
      swimmingPool: swimmingPool
    };
  }

  setIndex = index => {
    this.setState({ index: index });
  };
  componentWillMount = () => {
    // Axios.get()
  };
  render() {
    console.log("ssssssss", this.state.swimmingPool.length);
    return (
      <div>
        <h1 style={{ color: "green", textAlign: "center" }}>
          WEll-Come to {this.props.hotel.name}
        </h1>

        <Row>
          <Col lg={12} xs={24} offset={12}>
            <img
              src={this.props.hotel.image}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            {this.props.hotel.location}
          </Col>
        </Row>
        <h2
          style={{
            Color: "white",
            backgroundColor: "gray",
            textAlign: "center"
          }}
        >
          List Of Menus
        </h2>
        <Row>
          <Col
            lg={{ span: 7, offset: 1 }}
            xs={{ span: 19, offset: 3 }}
            style={{ backgroundColor: "#DDDDDD", borderRadius: "20px" }}
          >
            <h3> Foods</h3>
            <Row>
              <Col lg={{ span: 11, offset: 1 }} xs={{ span: 12 }}>
                Menu Item
              </Col>
              <Col
                lg={{ span: 7, offset: 5 }}
                xs={{ span: 12 }}
                style={{ float: "right" }}
              >
                Price
              </Col>
            </Row>
            <ul>
              {this.state.fastingFoods.map(food => (
                <li
                  style={{ borderBottom: "1px solid green", listStyle: "none" }}
                >
                  <Row>
                    <Col
                      lg={{ span: 6 }}
                      xs={{ span: 8 }}
                      style={{ marginLeft: 5, marginRight: 10 }}
                    >
                      {food.name}
                    </Col>
                    <Col
                      lg={{ span: 3 }}
                      xs={{ span: 12 }}
                      style={{ float: "right" }}
                    >
                      {food.price}
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
          </Col>
          <Col
            lg={{ span: 7, offset: 1 }}
            xs={{ span: 19, offset: 3 }}
            style={{ backgroundColor: "#DDDDDD", borderRadius: "20px" }}
          >
            <h4>Soft Drinks</h4>
            <Row>
              <Col lg={6} xs={8} offset={1}>
                Menu Item
              </Col>
              <Col lg={3} xs={6} style={{ float: "right" }}>
                Price
              </Col>
            </Row>
            <ol>
              {this.state.softDrinks.map(soft => (
                <li
                  style={{ borderBottom: "1px solid green", listStyle: "none" }}
                >
                  <Row>
                    <Col lg={4} xs={8}>
                      {soft.name}
                    </Col>
                    <Col lg={2} sm={4} style={{ float: "right" }}>
                      {soft.price}
                    </Col>
                  </Row>
                </li>
              ))}
            </ol>
          </Col>
          <Col
            lg={{ span: 7, offset: 1 }}
            xs={{ span: 19, offset: 3 }}
            style={{ backgroundColor: "#DDDDDD", borderRadius: "20px" }}
          >
            <h3>Alcholic Drinks</h3>
            <Row>
              <Col lg={6} xs={8} offset={1}>
                Menu Item
              </Col>
              <Col lg={3} xs={6} style={{ float: "right" }}>
                Price
              </Col>
            </Row>
            <ol>
              {this.state.AlcholicDrinks.map(soft => (
                <li
                  style={{ borderBottom: "1px solid blue", listStyle: "none" }}
                >
                  <Row>
                    <Col lg={4} xs={8}>
                      {soft.name}
                    </Col>
                    <Col lg={2} sm={4} style={{ float: "right" }}>
                      {soft.price}
                    </Col>
                  </Row>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
        <div>
          <Row>
            <Col lg={{ span: 22, offset: 1 }}>
              {this.state.swimmingPool.length ? (
                <div>
                  <h2 style={{ textAlign: "center", color: "blue" }}>
                    Our Swimming Pools Come And Enjoy Here!
                  </h2>
                  <Carousel index={this.state.index} onSelect={this.setIndex}>
                    {this.state.swimmingPool.map(pool => (
                      <Carousel.Item style={{ borderRadius: 20 }}>
                        <img
                          src={pool.image}
                          alt="slide photo"
                          style={{ width: "100%", height: 600 }}
                        />
                        <Carousel.Caption>
                          <h1 style={{ color: "blue" }}>
                            <b>
                              <i>WEll-Come to {this.props.hotel.name}</i>
                            </b>
                          </h1>
                          <h2 style={{ color: "yellow" }}>
                            This is our swimming pool!!!!!!!
                          </h2>
                          <h2 style={{ color: "red" }}>
                            Come And Enjoy with Us!!!!!!!
                          </h2>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              ) : (
                <div></div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HotelView;
