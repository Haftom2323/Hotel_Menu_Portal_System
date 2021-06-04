import React, { Component } from "react";
import { Badge, Icon } from "antd";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import HotelView from "./hotelView";
const axios = require("axios");
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
      hotels: [
        {
          name: "Milano Hotel",
          email: "milanohotel@gmail.com",
          image: "../assets/hotel.png",
          date: "09/12/2019",
          location: "Mekelle",
          admin: "Mr Xyz",
          hotel_id: 2,
          message: "new item is added"
        }
      ],
      show: false,
      showIt: false,
      selectedHotel: {}
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClick = hotel => {
    this.setState({ showIt: true, show: false, selectedHotel: hotel });
  };
  componentDidMount = () => {
    //TODO get all notification msg from notification table where their
    //user_id(store in session or send id back) curren user and status=0 (unseen)
    axios.get("http://localhost:8000/api/getUserNotification").then(res => {
      this.setState({ hotel: res.data, count: res.data.length });
      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light "
          style={{ backgroundColor: "#001f3f" }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  href={"/customer"}
                  onClick={() => this.props.handleContent("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.props.handleContent("profile")}
                  className="nav-link Active"
                  href={"profile"}
                  tabindex="-1"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link Active"
                  href={"more"}
                  tabindex="-1"
                  onClick={() => this.props.handleContent("more")}
                >
                  More hotels
                </Link>
              </li>
            </ul>

            <button
              className="nav-item"
              style={{
                border: "0",
                backgroundColor: "transparent",
                cursor: "pointer"
              }}
              onClick={this.handleShow}
            >
              <Badge
                count={this.state.count}
                style={{ backgroundColor: "#3486d8" }}
              >
                <Icon
                  type="bell"
                  style={{ fontSize: "25px", color: "#f57b25" }}
                  theme="filled"
                />
              </Badge>
            </button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Notifications</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.state.hotels.map(hotel => (
                  <Link
                    onClick={() => {
                      this.setState({ show: false });
                      this.props.handleClick(hotel);
                    }}
                    // onClick={this.handleClick}
                    key={hotel.hotel_id}
                  >
                    <li
                      style={{
                        listStyle: "none",
                        borderBottom: "1px solid grey",
                        margin: "5px"
                      }}
                    >
                      <b>
                        <i>
                          <u>{hotel.name}</u>
                        </i>
                      </b>
                      {hotel.message}
                    </li>
                  </Link>
                ))}
              </Modal.Body>
            </Modal>

            <li className="nav-item">
              <Link className="nav-link Active" to="Login" tabindex="-1">
                Log Out
              </Link>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
