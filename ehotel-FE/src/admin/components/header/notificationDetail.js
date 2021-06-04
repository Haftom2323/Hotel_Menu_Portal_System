import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { Redirect, Link } from "react-router-dom";
class notificationDetail extends Component {
  state = {
    hotel: {},
    success: "",
    message: ""
  };
  handleAccept = userId => {
    let id = {};
    id.uId = userId;
    console.log(id);
    axios.post("http://localhost:8000/api/acceptHotel", id).then(res => {
      if (res.status == 200) {
        this.setState({
          success: "registration successfully Accepted",
          message:
            "your registration is successfully approved, now you can log in and start using the system. Thanks for being registered!! "
        });
        axios
          .post("http://localhost:8000/api/sendEmail", this.state)
          .then(res => {
            if (res.status == 200) {
              console.log("Email already sent");
              this.setState({ success: "Email sent" });
            }
          });
      }
    });
    console.log("handle accept called", userId);
    return <Redirect to="admindashboard" />;
  };
  handleReject = userId => {
    let id = {};
    id.uId = userId;
    axios
      .post("http://localhost:8000/api/rejectHotel", id)
      .then(res => {
        if (res.status == 200) {
          //console.log("hotel successfully rejected");
          this.setState({ success: "hotel successfully rejected" });
        }
      })
      .catch(err => {
        console.log(err);
        //this.setState({ success: err });
      });
    console.log("handle reject called", userId);
  };

  viewHandler = async fileName => {
    //console.log("view clicked");
    // console.log("looking for " + fileName);
    let fileNamee = { fileName: fileName };
    axios
      .post("http://localhost:8000/api/pdf", fileNamee, {
        //data: fileName,
        responseType: "blob"
      })
      .then(response => {
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    let id = {};
    id.id = this.props.match.params.id;
    axios
      .post("http://localhost:8000/api/getHotelNotification", id)
      .then(res => {
        this.setState({ hotel: res.data });
        console.log(res.data);
      });
    if (this.state.success) {
    }
  };
  render() {
    const id = this.props.match.params.id;
    console.log(" on the notification detail" + id);
    const { hotel } = this.state;
    console.log("hotel", hotel[0]);
    const hotelDetail = hotel.length ? (
      <div>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <div
              className="card w-75"
              style={{
                marginTop: 150,
                marginLeft: 100,
                backgroundColor: "#DDDDDD"
              }}
            >
              <div className="card-body">
                <h2
                  className="card-title"
                  style={{ textAlign: "center", color: "blue" }}
                >
                  Notification
                  <p>
                    Hotel {hotel[0].name} is requesting for your approval of his
                    registration
                  </p>
                </h2>
                <h4 className="card-text">
                  <b>Hotel Name:</b> {hotel[0].name}
                </h4>
                <h4 className="card-text">
                  <b>Email:</b> {hotel[0].email}
                </h4>
                <h4 className="card-text">
                  <b>Location:</b> {hotel[0].location}
                </h4>
                <button
                  className="btn btn-primary"
                  onClick={() => this.viewHandler(hotel[0].license_document)}
                >
                  Click to View Licence Document
                </button>
                <br />
                <button
                  style={{
                    backgroundColor: "green",
                    width: 100,
                    height: 40,
                    borderRadius: 25
                  }}
                  className="m-2"
                  onClick={() => this.handleAccept(hotel[0].user_id)}
                >
                  <Link to="/admindashboard">Accept</Link>
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    width: 100,
                    height: 40,
                    borderRadius: 25
                  }}
                  onClick={() => this.handleReject(hotel[0].user_id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    ) : (
      <h2>Their is no detail we this hotel</h2>
    );

    return (
      <div>
        {hotelDetail}
        {this.state.success ? <p>{this.state.success}</p> : null}
        <div id="image"> </div>
      </div>
    );
  }
}

export default notificationDetail;
