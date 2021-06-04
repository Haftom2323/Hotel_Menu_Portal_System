import React, { Component } from "react";
import Hotels from "../htls";
import { Col, Row } from "antd";
import { Typography } from "antd";
import Grid from "antd/lib/card/Grid";
import axios from "axios";

const { Text } = Typography;
class hotelContent extends Component {
  constructor() {
    super();
    this.state = {
      Hotels: Hotels,
      status: ""
    };
  }
  handleBlock = user_id => {
    //set user_acount=2
    console.log("block clicked", user_id);
    let id = {
      uId: user_id
    };
    axios.post("http://localhost:8000/api/blockHotel", id).then(res => {
      this.setState({ status: res.data });
      //console.log("fro", res.data);
    });
    this.componentWillMount();
  };
  handleUnBlock = user_id => {
    //set  user_status=1
    console.log("unblock clicked", user_id);
    let id = {
      uId: user_id
    };
    axios.post("http://localhost:8000/api/unBlockHotel", id).then(res => {
      this.setState({ status: res.data });
    });
    this.componentWillMount();
  };
  componentWillMount = () => {
    axios.get("http://localhost:8000/api/getAllHotels").then(res => {
      this.setState({ Hotels: res.data });
      console.log("from hotels", res.data);
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>
          Registered Hotels{" "}
        </h1>
        <div>
          <ul style={{ width: "100%", overflowY: "scroll" }}>
            {this.state.Hotels.map(hotel => (
              <li style={{ listStyle: "none" }} key={hotel.hotel_id}>
                <Grid>
                  <Row>
                    <Col span={6}>
                      <img
                        src={hotel.image}
                        alt="profile"
                        style={{ width: 50, height: 50 }}
                      />
                    </Col>
                    <Col span={10}>
                      <Row>
                        <Text>{hotel.name} </Text>
                        <p>{hotel.email}</p>
                      </Row>
                    </Col>
                    <Col span={6} span={2}>
                      <Row>
                        <Col>{hotel.location}</Col>
                        <Col>{hotel.date}</Col>
                      </Row>
                    </Col>
                  </Row>
                  {hotel.user_status == 1 ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleBlock(hotel.user_id)}
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleUnBlock(hotel.user_id)}
                    >
                      UnBlock
                    </button>
                  )}
                </Grid>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default hotelContent;
