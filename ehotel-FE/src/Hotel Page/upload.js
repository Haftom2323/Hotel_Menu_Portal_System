import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Carousel } from "react-bootstrap";
class upload extends Component {
  state = {
    file: "",
    image: "",
    services: [],
    srvcs: [],
    ss: [],
    price: "",
    description: ""
  };

  handleChange = event => {
    this.setState({ file: event.target.files[0] });
    console.log("file", event);
  };
  handlechangee = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handlImage = (name, old) => {
    let img = {
      image: name
    };
    console.log("file nameeee", name);
    console.log("img", img);
    const imageName = name; //"gahdi.PNG";
    const url = `http://localhost:8000/api/image`;
    axios.post(url, img, { responseType: "blob" }).then(res => {
      const file = new Blob([res.data], {
        type: "image/jpg"
      });
      const fileURL = URL.createObjectURL(file);
      //this.state.services;
      console.log("file", fileURL);
      old.push(fileURL);
      this.setState({ ss: old });
      console.log("service", this.state.services);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("state", this.state);
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);
    axios
      .post("http://localhost:8000/api/upload", formData, {
        headers: {
          // Accept: "application/pdf",
          "Content-type": "application/json"
        }
      })
      .then(res => {
        console.log("uploaded");
        console.log("image", this.state.image);
        console.log("file", formData);
      });
  };

  componentWillMount = () => {
    axios.get("http://localhost:8000/api/getimages").then(res => {
      console.log(res.data);
      this.setState({ srvcs: res.data });
      let a = [];
      let imgs = res.data.map(r => {
        this.handlImage(r.image, this.state.ss);
      });
    });
    this.setState({ services: this.state.ss });
  };
  render() {
    return (
      <div>
        <div
          className="m-3"
          style={{ backgroundColor: "#A4A6B3", paddingTop: 20 }}
        >
          {" "}
          <Row>
            <Col lg={{ span: 4, offset: 5 }}>
              <Link to="hotel">Back</Link>
            </Col>
          </Row>
        </div>
        <Row>
          <Col
            lg={{ span: 5, offset: 1 }}
            style={{ marginTop: "20%" }}
            className="mt-10"
          >
            <div>
              <label>Description</label>
              <textarea
                type="text"
                id="description"
                onChange={this.handlechangee}
              />
            </div>
            <div className="m-3">
              <label>price</label>
              <input type="text" id="price" onChange={this.handlechangee} />
            </div>
            <div className="m-3">
              <input type="file" onChange={this.handleChange} />
              <br />
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-secondary"
              >
                upload
              </button>
            </div>
          </Col>

          <Col lg={{ span: 12 }} sm={{ span: 24 }} style={{ height: 50 }}>
            {this.state.services ? (
              <Carousel index={this.state.index} onSelect={this.setIndex}>
                {this.state.services.map(s => (
                  <Carousel.Item style={{ borderRadius: 20 }}>
                    <img
                      src={s}
                      alt="slide photo"
                      style={{ width: "100%", height: 600 }}
                    />
                    <Carousel.Caption>
                      <h2 style={{ color: "red" }}>
                        Come And Enjoy with Us!!!!!!!
                      </h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : null}
          </Col>
          <Col lg={{ span: 5, offset: 1 }} style={{ marginTop: 50 }}>
            <h2>
              <u>our services </u>
            </h2>
            {this.state.srvcs
              ? this.state.srvcs.map(s => <li>{s.description}</li>)
              : null}
          </Col>
        </Row>
      </div>
    );
  }
}

export default upload;
