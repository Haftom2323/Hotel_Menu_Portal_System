import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Button, Modal } from "react-bootstrap";
//import Admin from "../admin";
import Profile from "./profile";
import Password from "./password";
import axios from "axios";
class settingContent extends Component {
  constructor() {
    super();

    this.state = { show: false, admin: {} };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleSave = () => {
    this.setState({ show: false });

    axios.post("http://localhost:8000/api/editAccount").then(res => {
      this.setState({ hotel: res.data, count: res.data.length });
      console.log(res.data);
    });
  };
  handleChange = e => {};
  componentWillMount() {
    axios.get("http://localhost:8000/api/getAdminAccount").then(res => {
      this.setState({ admin: res.data });
      console.log(res.data);
    });
  }
  render() {
    console.log(this.state.admin);
    return (
      <div style={{ marginLeft: "5%", backgroundColor: "#DDDDDD" }}>
        <h1>General Settings </h1>
        <Col span={6} style={{ marginRignt: "5%" }}>
          <h3>Account </h3>
          <div>
            <div style={{ borderRadius: 1 }}>
              <form>
                <div>
                  <h6>User Name</h6>{" "}
                  <input
                    type="text"
                    onChange={this.handleChange}
                    defaultValue={this.state.admin.user_name}
                    disabled
                  />
                </div>
                <div>
                  <h6>User type</h6>{" "}
                  <input
                    type="text"
                    onChange={this.handleChange}
                    disabled
                    defaultValue={this.state.admin.user_type}
                  />
                </div>
                <div>
                  <h6>Email</h6>{" "}
                  <input
                    type="text"
                    disabled
                    defaultValue={this.state.admin.email}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <div style={{ marginTop: 20, marginLeft: 20 }}>
                <Button
                  onClick={this.handleShow}
                  style={{ height: 30, borderRadius: 15 }}
                >
                  Edit Account <Icon type="edit" />
                </Button>
              </div>
            </div>
            <Row>
              <Col>
                <Modal
                  show={this.state.show}
                  onHide={this.handleClose}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h5>Profile Settings</h5>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <form class="pt-4">
                        <label class="pl-1">Name</label>
                        <input
                          type="text"
                          onChange={this.handleChange.bind(this)}
                          class="form-control1 pt-1"
                          defaultValue={this.state.admin.first_name}
                        />
                        <div>
                          <label class="pl-1">User Name</label>
                          <input
                            type="text"
                            onChange={this.handleChange.bind(this)}
                            class="form-control1 pt-1"
                            defaultValue={this.state.admin.user_name}
                          />
                        </div>
                        <div>
                          <label class="pl-1">Email</label>
                          <input
                            type="text"
                            onChange={this.handleChange.bind(this)}
                            class="form-control1 pt-1"
                            defaultValue={this.state.admin.email}
                          />
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSave}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={6}>
          <Profile />
        </Col>
        <Col span={4}>
          <Password />
        </Col>
      </div>
    );
  }
}

export default settingContent;
