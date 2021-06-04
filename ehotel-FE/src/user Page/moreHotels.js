import React, { Component } from "react";
import Grid from "antd/lib/card/Grid";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
import Hotels from "./htls";
import User from "./usr";
import axios from "axios";
const { Text } = Typography;

class TotalHotels extends Component {
  constructor() {
    super();
    this.state = {
      user: User[0],
      hotels: "",
      selectedHotel: "",
      error: "",
      message: "" //user subscribes successfully or generate an error
    };
  }
  handleSubscribe = hotel => {
    //TODO  INSER hotel_id and user_id in hotel subscription teble
    axios
      .post("http://localhost:8000/api/hotelSubscription", hotel)
      .then(res => {
        this.setState({ message: res.data });
        console.log("from subscription", res);
      });
  };
  componentWillMount = () => {
    axios
      .get("http://localhost:8000/api/getHotels")
      .then(res => {
        if (res.status == 200) {
          this.setState({ hotels: res.data });
          console.log(" result of gethotels====", res.data);
        }
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  };
  render() {
    console.log("from total hotels******", this.state.hotels);
    return (
      <div>
        <h3 style={{ color: "green", textAlign: "center" }}>Hotels For you</h3>
        {this.state.message ? (
          <h2
            style={{
              backgroundColor: "yellow",
              color: "blue",
              textAlign: "center"
            }}
          >
            {this.state.message}
          </h2>
        ) : null}
        <ul style={{ listStyle: "none" }}>
          {this.state.hotels ? (
            <div>
              {this.state.hotels.map(hotel => (
                <li>
                  <Grid style={{ borderRadius: 20, color: "green" }}>
                    <Row>
                      <Col lg={12} xs={24}>
                        <p style={{ fontSize: 25 }}> {hotel.name}</p>
                        {hotel.location}
                        <br />
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleSubscribe(hotel)}
                        >
                          Subscribe
                        </button>
                      </Col>
                      <Col
                        lg={8}
                        xs={24}
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() => this.props.handlClick(hotel)}
                      >
                        <img
                          src={hotel.image}
                          alt="hotel profile"
                          style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100
                          }}
                        />

                        <Button
                          onClick={() => this.props.handlClick(hotel)}
                          style={{
                            backgroundColor: "green",
                            borderRadius: 20,
                            color: "white"
                          }}
                        >
                          Click to view Menus
                        </Button>
                      </Col>
                    </Row>
                  </Grid>
                </li>
              ))}
            </div>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default TotalHotels;
