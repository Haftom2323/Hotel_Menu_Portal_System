import React, { Component } from "react";
import Logo from "../assets/logo.png";
import calander from "../assets/calander.png";
import {
  Badge,
  Icon,
  Typography,
  Input,
  Slider,
  InputNumber,
  Modal,
  Radio
} from "antd";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import ReactListInput from "react-list-input";
import Calendar from "react-calendar";
const { Title } = Typography;

const Input1 = ({ value, onChange, type = "text" }) => (
  <input type={type} value={value} onChange={e => onChange(e.target.value)} />
);
class JobPost extends Component {
  state = {
    catagory: "",
    requirment: [],
    inputValue: 1,
    date: "",
    title: "",
    url: "",
    type: "full time",
    discription: "",
    salary: "",
    value: "",
    experience: "",
    salaryError: "",
    urlError: "",
    experienceError: ""
  };
  handleSizeChange = e => {
    this.setState({ type: e.target.value });
  };

  validate(event) {
    let urlError = "";
    if (event.target.name === "salary") {
      if (event.target.validity.valid) {
        this.setState({
          salaryError: "",
          salary: event.target.value
        });
      } else {
        this.setState({ salaryError: "Invalied salary" });
      }
    } else if (event.target.name === "url") {
      var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      if (!pattern.test(this.state.url)) {
        urlError = "Url is not valid!";
      }
      if (urlError) {
        this.setState({ urlError: urlError });
      } else {
        this.setState({ urlError: "" });
      }
    } else if (event.target.name === "experience") {
      if (event.target.validity.valid) {
        this.setState({
          experienceError: "",
          experience: event.target.value
        });
      } else {
        this.setState({ experienceError: "Invalied number of Year" });
      }
    }
  }
  onChangeC = date => {
    this.setState({ date });
  };
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "salary" || event.target.name === "experience") {
      this.validate(event);
    }
  }
  handleSubmit(event) {
    if (event.target.name === "url") {
      this.validate(event);
    }
  }
  handleSubmitpush(event) {
    this.setState(state => {
      const requirment = state.requirment.concat(state.value);
      return {
        requirment: state.requirment.concat(state.value)
      };
    });
  }
  onChangeS = value => {
    this.setState({
      inputValue: value
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { type } = this.state;
    const { inputValue } = this.state;
    return (
      <div className="container-JP">
        <Row className="navbar-JP">
          <Col xs={11}>
            <img src={Logo} style={{ height: "100px" }} alt="Logo" />
          </Col>
          <Col className="btnJP">
            <button
              style={{
                border: "0",
                backgroundColor: "transparent",
                cursor: "pointer"
              }}
            >
              <Badge count={3} style={{ backgroundColor: "#3486d8" }}>
                <Icon
                  type="bell"
                  style={{ fontSize: "25px", color: "#f57b25" }}
                  theme="filled"
                />
              </Badge>
            </button>
          </Col>
          <Col className="btnJP">
            <button
              style={{
                border: "0",
                backgroundColor: "transparent",
                cursor: "pointer"
              }}
            >
              <Icon
                type="setting"
                style={{ fontSize: "25px", color: "#f57b25" }}
                theme="filled"
              />
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Row className="item">
              <Col>
                <Title>New Menu Offer</Title>
              </Col>
            </Row>
            <div className="left-container">
              <Row className="item">
                <Col>
                  <Input
                    className="input-JP"
                    placeholder="Menu title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                  />
                </Col>
              </Row>
              <Row className="item">
                <Col xs={2}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={calander}
                    style={{ height: "80px" }}
                    alt="calander"
                    onClick={this.showModal}
                  />
                  <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <Calendar
                      onChange={this.onChangeC}
                      value={this.state.date}
                    />
                  </Modal>
                </Col>

                <Col>
                  <Input
                    className="input-JP-deadline"
                    disabled="disabled"
                    placeholder="Dead line"
                    value={this.state.date}
                  ></Input>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Input
                    className="input-JP"
                    placeholder="where to Apply:[URL]"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange.bind(this)}
                    onPressEnter={this.handleSubmit.bind(this)}
                  />
                </Col>
              </Row>
              <Row className="item">
                <Col className="error-display">{this.state.urlError}</Col>
              </Row>
              <Row className="item">
                <Col>
                  <p className="description">Description</p>
                </Col>
              </Row>
              <Row className="item">
                <Col>
                  <Form style={{ borderColor: "#f57b25" }}>
                    <Form.Group>
                      <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    className="input-JP"
                    placeholder="Salary"
                    name="salary"
                    pattern="[0-9]*"
                    value={this.state.salary}
                    onChange={this.handleChange.bind(this)}
                    onPressEnter={this.handleSubmit.bind(this)}
                  />
                </Col>
                <Col xs={7}>
                  <Form className="negotiable">
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Negotiable" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col className="error-display">{this.state.salaryError}</Col>
                <Col xs={7}> </Col>
              </Row>
            </div>
          </Col>
          <Col className="separator-JP" xs={0}></Col>
          <Col xs={5} className="right-container">
            <Row className="item">
              <Col className="post-btn-container">
                <Button className="post-btn">Post</Button>
              </Col>
            </Row>
            <Row className="item ">
              <Col style={{ marginLeft: "71%" }}>
                <Button
                  className="btn-Employment-t "
                  onClick={this.handleSubmitpush.bind(this)}
                  style={{ backgroundColor: "blue" }}
                >
                  Add +
                </Button>
              </Col>

              <Col xs={12}>
                <Input
                  className="input-Jp"
                  name="value"
                  placeholder="Add Requirment"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
              </Col>
              <Col>
                <ul style={{ border: "solid", borderWidth: "1px" }}>
                  {this.state.requirment.map(item => (
                    <Row className="req-list">
                      <Col xs={1}>
                        <Icon
                          type="right-square"
                          style={{ marginRight: "10px" }}
                        />
                      </Col>
                      <Col style={{ paddingTop: "4px" }}>
                        <p>{item} </p>
                      </Col>
                    </Row>
                  ))}
                </ul>
              </Col>
            </Row>

            <Row>
              <Col xs={5}>
                <Input
                  className="input-JP"
                  name="experience"
                  pattern="[0-9]*"
                  placeholder="Experience"
                  value={this.state.experience}
                  onChange={this.handleChange.bind(this)}
                  onPressEnter={this.handleSubmit.bind(this)}
                />
              </Col>
              <Col>
                <p className="year">Year</p>
              </Col>
            </Row>
            <Row className="item">
              <Col xs={5} className="error-display">
                {this.state.experienceError}
              </Col>
              <Col> </Col>
            </Row>
            <Row className="item">
              <Col>
                <p className="description">Employment type</p>
              </Col>
            </Row>

            <Row className="item">
              <Col xs={20}>
                <Radio.Group value={type} onChange={this.handleSizeChange}>
                  <Radio.Button className="btn-Employment-t" value="full time">
                    Full Time
                  </Radio.Button>
                  <Radio.Button value="part time" className="btn-Employment-t">
                    Part Time
                  </Radio.Button>
                  <Radio.Button value="freelance" className="btn-Employment-t">
                    Freelance
                  </Radio.Button>
                  <Radio.Button value="contract" className="btn-Employment-t">
                    Contract
                  </Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <Row className="item">
              <Col>
                <p className="description">Number of People</p>
              </Col>
            </Row>
            <Row className="item">
              <Col
                xs={1}
                style={{
                  color: "#f57b25",
                  fontSize: "18px",
                  paddingTop: "5px"
                }}
              >
                0
              </Col>
              <Col xs={7}>
                <Slider
                  min={0}
                  max={100}
                  onChange={this.onChangeS}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
              </Col>
              <Col
                xs={1}
                style={{
                  color: "#f57b25",
                  borderColor: "red",
                  fontSize: "18px",
                  paddingTop: "5px"
                }}
              >
                100
              </Col>
              <Col xs={2}>
                <InputNumber
                  min={0}
                  max={100}
                  style={{
                    color: "#f57b25",
                    fontSize: "18px",
                    borderRadius: "20px",
                    width: "70px"
                  }}
                  value={inputValue}
                  onChange={this.onChangeS}
                />
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>

            <Row className="item">
              <Col>
                <Input
                  className="input-JP"
                  placeholder="Catagory"
                  name="catagory"
                  value={this.state.catagory}
                  onChange={this.handleChange.bind(this)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default JobPost;
