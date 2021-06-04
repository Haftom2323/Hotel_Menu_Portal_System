import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Button, Modal } from "react-bootstrap";
import Admin from "../admin";
class password extends Component {
  constructor() {
    super();
    this.state = { show: false, admin: Admin };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleSave = () => {
    this.setState({ show: false });
  };
  handleChange = () => {};
  render() {
    return (
      <div>
        <Col span={8}>
          <h3>Profile Settings</h3>
          <div>
            <div style={{ borderRadius: 1 }}>
              <form>
                <div>
                  <h6>Gender</h6>{" "}
                  <input
                    type="text"
                    defaultValue={this.state.admin.gender}
                    disabled
                  />
                </div>
                <div>
                  <h6>Location</h6>{" "}
                  <input
                    type="text"
                    disabled
                    defaultValue={this.state.admin.location}
                  />
                </div>
              </form>
              <div style={{ marginTop: 20, marginLeft: 20 }}>
                <Button
                  onClick={this.handleShow}
                  style={{ height: 30, width: 150, borderRadius: 15 }}
                >
                  Edit Profile <Icon type="edit" />
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
                        <label class="pl-1">Location</label>
                        <input
                          type="text"
                          onChange={this.handleChange.bind(this)}
                          class="form-control1 pt-1"
                          defaultValue={this.state.admin.location}
                        />
                        <div>
                          <label class="pl-1">Gender</label>
                          <input
                            type="text"
                            onChange={this.handleChange.bind(this)}
                            class="form-control1 pt-1"
                            defaultValue={this.state.admin.gender}
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
      </div>
    );
  }
}
export default password;
