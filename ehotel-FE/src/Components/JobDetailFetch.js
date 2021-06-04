import React from "react";
import Pop from "./Popup";
import { Typography, Button } from "antd";
import { Row, Col, Card } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "reactjs-popup";

const { Title } = Typography;

const JobDetail = Job => {
  return (
    <div>
      <Row>
        <Col xs={9}>
          <Title level={4} className="title2">
            {" "}
            {Job.title}{" "}
          </Title>
        </Col>
        <Col>
          <Popup
            modal
            trigger={
              <Button
                className="ApplyBtn"
                type="default"
                shape="round"
                style={{ paddingBottom: "10px" }}
                href="#"
              >
                Apply now
              </Button>
            }
          >
            <Pop />
          </Popup>
        </Col>
      </Row>
      <div className="dropdown-divider mr-4"></div>
      <Card
        border="info"
        className="cardJ mt-4"
        style={{ borderRadius: "20px", width: "95%" }}
      >
        <Card.Body>
          <Row>
            <Col>
              <Row className="shortDcrp">Posted by: {Job.organization} </Row>
              <Row className="shortDcrp">Location:{Job.location}</Row>
              <Row className="shortDcrp">Specialization:{Job.category}</Row>
              <Row className="shortDcrp">Employment time:{Job.type} </Row>
            </Col>
            <Col>
              <div
                className="separator"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderHeight: "100%",
                  borderColor: "#ff7c3b",
                  marginTop: "-1%",
                  marginLeft: "40%",
                  opacity: 0.5
                }}
              ></div>{" "}
            </Col>
            <Col>
              <Row>
                <p className="shortDcrp">Closing Time:{Job.date}</p>
              </Row>
              <Row>
                <p className="shortDcrp">
                  Number of people required:{Job.peopleReqiured}
                </p>
              </Row>
              <Row>
                <p className="shortDcrp">Salary:{Job.salary}</p>
              </Row>
              <Row>
                <p className="shortDcrp">
                  Expriance required:{Job.experienceRequired}
                </p>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="container2">
        <Row>
          <h4 className="JobD" fontSize="10">
            Job Description
          </h4>
        </Row>
        <Row style={{ textAlign: "justify", textJustify: "inter-word" }}>
          {" "}
          {Job.description}
        </Row>
        <Row style={{ textAlign: "justify", textJustify: "inter-word" }}>
          <ul style={{ paddingLeft: "15px", paddingTop: "10px" }}>
            {Job.duties.map((element, index) => {
              return <li>{element}</li>;
            })}
          </ul>
        </Row>

        <Row>
          <h4 className="JobD" fontSize="10" style={{ paddingTop: "5%" }}>
            Requirements
          </h4>
        </Row>
        <Row>
          <ul style={{ paddingLeft: "15px", paddingTop: "10px" }}>
            {Job.duties.map((element, index) => {
              return <li>{element}</li>;
            })}
          </ul>
        </Row>

        <Row>
          {" "}
          <h4 className="JobD" style={{ paddingTop: "5%" }}>
            How To Apply
          </h4>
        </Row>
        <Row style={{ textAlign: "justify", textJustify: "inter-word" }}>
          {" "}
          {Job.howToApply}
        </Row>
        <Card
          border="info"
          style={{ borderRadius: "20px", width: "95%", alignItems: "center" }}
        >
          <Card.Body>
            <Row>
              {" "}
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  paddingTop: "0",
                  marginTop: "0"
                }}
              >
                Are you the best fit for the job?
              </p>
            </Row>
            <Row>
              <Popup
                modal
                trigger={
                  <Button
                    className="ApplyBtn"
                    type="default"
                    size="large"
                    shape="round"
                    style={{ marginTop: "20px", marginLeft: "60px" }}
                    href="#"
                  >
                    Apply now
                  </Button>
                }
              >
                <Pop />
              </Popup>
            </Row>
          </Card.Body>
        </Card>

        <Row style={{ paddingLeft: "10%", paddingBottom: "5%" }}>
          {" "}
          Please do not accept payment requests at any of the recruitment
          phases!
        </Row>
      </div>
    </div>
  );
};

export default JobDetail;
