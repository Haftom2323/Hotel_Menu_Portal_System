import React, { Component } from "react";
import { Row, Col } from "antd";
import customers from "../usrs";
import { Typography, Tag } from "antd";
import Grid from "antd/lib/card/Grid";
import Axios from "axios";
const { Text, Title } = Typography;
class UserComponent extends Component {
  state = { customers: customers };

  componentWillMount = () => {
    Axios.get("http://localhost:8000/api/getAllUsers").then(res => {
      this.setState({ customers: res.data });
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>
          Registered Customers
        </h1>
        <Row>
          <ul
            style={{
              width: "100%",
              // overflowY: "scroll",
              border: "1px solid blue",
              backgroundColor: "#DDDDDD",
              borderRadius: 20
            }}
          >
            {this.state.customers.map(customer => (
              <li
                style={{ borderBottom: "1px solid black", listStyle: "none" }}
              >
                <Row>
                  <Col span={4}>
                    <img
                      src={customer.image}
                      alt="profile"
                      style={{ width: 50, height: 50 }}
                    />
                  </Col>
                  <Col span={15}>
                    <Row>
                      <Text>
                        {customer.first_name + " " + customer.last_name}{" "}
                      </Text>
                      <Col>{customer.email}</Col>
                    </Row>
                  </Col>
                  <Col span={3} style={{}}>
                    <Row>
                      <Col>{customer.gender}</Col>
                      <Col>{customer.date}</Col>
                    </Row>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Row>
      </div>
    );
  }
}

export default UserComponent;
