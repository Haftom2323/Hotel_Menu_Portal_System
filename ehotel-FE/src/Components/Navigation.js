import React from "react";
import Logo from "../assets/hotel.png";
import { Badge, Icon, Row, Col, Button } from "antd";

const Navigation = () => (
  <div style={{ marginBottom: "30px", marginTop: "20px" }}>
    <Row type="flex">
      <Col span={8} offset={8} style={{ textAlign: "center" }}>
        <a href="http://localhost:3000">
          <img src={Logo} style={{ height: "100px" }} alt="Logo" />
        </a>
      </Col>
      <Col
        span={8}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingTop: "15px"
        }}
      >
        <button
          style={{
            border: "0",
            backgroundColor: "transparent",
            cursor: "pointer"
          }}
        >
          <Icon
            type="home"
            style={{ fontSize: "25px", color: "#f57b25" }}
            theme="filled"
          />
        </button>

        <Button
          href="/"
          style={{ border: "0", backgroundColor: "white", cursor: "pointer" }}
        >
          <Icon
            type="home"
            style={{ fontSize: "25px", color: "#f57b25" }}
            theme="filled"
          />
        </Button>
        <Button
          style={{
            border: "0",
            backgroundColor: "transparent",
            cursor: "pointer"
          }}
        >
          <Badge
            count={19}
            offset={[3, 0]}
            style={{ backgroundColor: "#3486d8" }}
          >
            <Icon
              type="plus-circle"
              style={{ fontSize: "25px", color: "#f57b25" }}
              theme="filled"
            />
          </Badge>
        </Button>
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
    <br />
  </div>
);

export default Navigation;
