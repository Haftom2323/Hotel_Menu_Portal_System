import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Button, Modal } from "react-bootstrap";
import Admin from "../admin";
class password extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      admin: Admin,
      oldpassword: "",
      newpassword: "",
      repassword: ""
    };
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
          <div>
            <div>
              <div style={{ marginTop: 20, marginLeft: 20 }}>
                <Button
                  onClick={this.handleShow}
                  style={{ height: 30, width: 150, borderRadius: 15 }}
                >
                  Change password <Icon type="edit" />
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
                      <h5>Password Change</h5>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <form class="pt-4">
                        <label class="pl-1">Old password</label>
                        <input
                          type="password"
                          onChange={this.handleChange.bind(this)}
                          class="form-control1 pt-1"
                          placeholder="Enter the old password"
                        />
                        <div>
                          <label class="pl-1">New password</label>
                          <input
                            type="password"
                            onChange={this.handleChange.bind(this)}
                            class="form-control1 pt-1"
                            placeholder="Enter a new password"
                          />
                        </div>
                        <div>
                          <label class="pl-1">Confirm password</label>
                          <input
                            type="password"
                            onChange={this.handleChange.bind(this)}
                            class="form-control1 pt-1"
                            placeholder="confirm password"
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
