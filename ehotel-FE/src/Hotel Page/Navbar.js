import { Badge, Icon } from "antd";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
class Navbar extends Component {
  state = {
    notification: [
      { first_name: "Abebe", last_name: "Abebe", id: 1 },
      { first_name: "Goitom", last_name: "Negash", id: 2 }
    ],
    show: false
  };
  componentWillMount = () => {
    Axios.get("http://localhost:8000/api/getnotification")
      .then(res => {
        if (res.status == 200) {
          console.log("get notification", res.data);
          // this.setState({ notifcation: res.data });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleshow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light auto"
          style={{ backgroundColor: "#001f3f" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => this.props.handleContent("home")}
                >
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => this.props.handleContent("profile")}
                >
                  Profile
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.props.handleSearchValue}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{ borderRadius: 20 }}
                onClick={this.props.handleSearch}
              >
                Search
              </button>
            </form>
            <button
              className="nav-item"
              style={{
                border: "0",
                backgroundColor: "transparent",
                cursor: "pointer"
              }}
              onClick={this.handleshow}
            >
              <Badge
                count={this.state.notification.length}
                style={{ backgroundColor: "#3486d8" }}
              >
                <Icon
                  type="bell"
                  style={{ fontSize: "25px", color: "#f57b25" }}
                  theme="filled"
                />
              </Badge>
            </button>
            <li className="nav-item">
              <Link className="nav-link Active" to="Login" tabindex="-1">
                Log Out
              </Link>
            </li>
          </div>
        </nav>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Notifications</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.notification
              ? this.state.notification.map(not => (
                  <Link
                    onClick={() => {
                      this.setState({ show: false });
                      // this.props.handleClick(hotel);
                    }}
                    // onClick={this.handleClick}
                    key={not.id}
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
                          <u>
                            {not.first_name} {not.last_name}
                          </u>
                        </i>
                      </b>
                      Subscribed your hotel
                    </li>
                  </Link>
                ))
              : null}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
