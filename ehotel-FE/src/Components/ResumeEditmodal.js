import React, { Component, useState } from "react";
import { Button, Modal, Row, OverlayTrigger } from "react-bootstrap";
import editicon from "../assets/editicon.png";
class EditResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      editedResume: {
        Graduated: this.props.dataResume.Graduated,
        GraduatedField: this.props.dataResume.GraduatedField,
        Experience: this.props.dataResume.Experience
      }
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handlesubmitdata = () => {
    this.props.EditResumeaction(this.state.data);
    this.handleClose();
  };
  handleedit = e => {
    let editedResume = this.state.editedResume;
    editedResume[e.target.name] = e.target.value;
    this.setState({
      editedResume: editedResume
    });
  };

  render() {
    const { EditResumeaction } = this.props;
    return (
      <>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <div
              style={{
                backgroundColor: " rgb(60,181,239)",
                paddingTop: "10px",
                color: "white",
                borderRadius: 10,
                height: "50px"
              }}
            >
              Edit Your Resume <strong>Here</strong>
            </div>
          }
        >
          <button className="mr-auto btn btn-warning" onClick={this.handleShow}>
            Editl
            <img src={editicon} style={{ height: "20px" }} alt="Logo" />
          </button>
        </OverlayTrigger>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header
            style={{
              paddingLeft: "20%",
              color: "#f57b25",
              borderBottom: "3px solid rgb(60,181,239,0.2)",
              fontFamily: "Montserrat",
              fontSize: "25px"
            }}
            closeButton
          >
            <Modal.Title>
              {" "}
              <h5> Edit your Resume</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <li style={{ listStyle: "none" }}>
                <form class="pt-4">
                  <label class="pl-1">Graduated @</label>
                  <input
                    type="text"
                    class="form-control1 pt-1"
                    name="Graduated"
                    onChange={this.handleedit}
                    defaultValue={this.state.editedResume.Graduated}
                  />
                  <label class="pt-4 pl-2">Graduated Field</label>
                  <input
                    type="text"
                    class="form-control1 "
                    name="GraduatedField"
                    onChange={this.handleedit}
                    defaultValue={this.state.editedResume.GraduatedField}
                  />
                  <label class="pt-4 pl-2">Experience</label>
                  <textarea
                    id="experience"
                    name="Experience"
                    onChange={this.handleedit}
                    style={{ resize: "none" }}
                    rows="4"
                    col="4"
                  >
                    {this.state.editedResume.Experience}
                  </textarea>
                </form>
              </li>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => EditResumeaction(this.state.editedResume)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default EditResume;
