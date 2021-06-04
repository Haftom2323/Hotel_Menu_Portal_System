import React, { Component } from "react";
import { Badge, Icon } from "antd";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import IconSearch from "../../../assets/icon-search";
import IconBellNew from "../../../assets/icon-bell-new";
import User from "../../../assets/user.png";
const axios = require("axios");
const styles = StyleSheet.create({
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 14,
    border: "1px solid #DFE0EB"
  },
  container: {
    height: 60,
    backgroundColor: "#001f3f",
    paddingTop: 10,
    marginTop: 0
    //height: 40
  },
  cursorPointer: {
    cursor: "pointer"
  },
  name: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: 0.2,
    "@media (max-width: 768px)": {
      display: "none"
    }
  },
  separator: {
    borderLeft: "1px solid #DFE0EB",
    marginLeft: 32,
    marginRight: 0,
    height: 32,
    width: 2,
    "@media (max-width: 768px)": {
      marginLeft: 12,
      marginRight: 12
    }
  },
  title: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "arial",
    lineHeight: "30px",
    letterSpacing: 0.3,
    "@media (max-width: 768px)": {
      marginLeft: 36
    },
    "@media (max-width: 468px)": {
      fontSize: 20
    }
  },
  iconStyles: {
    cursor: "pointer",
    marginLeft: 25,
    "@media (max-width: 768px)": {
      marginLeft: 12
    }
  }
});

class HeaderComponent extends Component {
  state = { penddingHotels: [], show: false, count: 0 };
  handleshow = () => {
    // alert("yyy");
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleCount = userId => {
    console.log(userId);
    //this.props.history.push("");
    this.setState({}); //console.log("link");
  };
  componentDidMount() {
    axios.get("http://localhost:8000/api/getPendingHotels").then(res => {
      this.setState({
        penddingHotels: res.data.hotels,
        count: res.data.hotels.length
      });
      console.log(res.data.hotels);
    });
  }
  render() {
    const { icon, title, ...otherProps } = this.props;
    return (
      <Row
        className={css(styles.container)}
        vertical="center"
        horizontal="space-between"
        {...otherProps}
      >
        <span className={css(styles.title)}>{title}</span>
        <Row vertical="center">
          <div className={css(styles.iconStyles)}>
            <IconSearch />
          </div>
          <button
            onClick={this.handleshow}
            className="nav-item"
            style={{
              border: "0",
              backgroundColor: "transparent",
              cursor: "pointer"
            }}
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
              {this.state.penddingHotels.map(h => (
                <Link
                  onClick={() => this.handleCount(h.user_id)}
                  key={h.user_id}
                  to={"/notificationDetail/" + h.user_id}
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
                        <u>{h.name}</u>
                      </i>
                    </b>
                    is penddding for your apprival!
                  </li>
                </Link>
              ))}
            </Modal.Body>
          </Modal>
          <div className={css(styles.separator)}></div>
          <Row vertical="center">
            <span className={css(styles.name, styles.cursorPointer)}></span>
            <img
              src={User}
              alt="avatar"
              className={css(styles.avatar, styles.cursorPointer)}
            />
          </Row>
        </Row>
      </Row>
    );
  }
}

HeaderComponent.propTypes = {
  title: string
};

export default HeaderComponent;
