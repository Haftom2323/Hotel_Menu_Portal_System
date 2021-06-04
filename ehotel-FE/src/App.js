import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Categories from "./Components/Categories";
import Recommendeds from "./Components/Recommendeds";
import Recents from "./Components/Recents";
import ForYou from "./Components/ForYou";
import {Row,Col} from 'antd';

class App extends Component {
  /*constructor() {
    super();
    this.state = {
      show: false,
      job: "",
      search: ""
    };
  }
  searchFun = key => {
    this.setState(() => {
      return {
        search: key
      };
    });
  };
  handleClick = (SelectedJob, toggle) => {
    this.setState(() => {
      return {
        show: toggle,
        job: SelectedJob
      };
    });
  };*/
  render() {
    return (
      <div className="App">
        <Navigation />

       {/* <Row>
          <Col span={12} offset={6}>
            <Search
              searchFun={this.searchFun}
              show={this.state.show}
              job={this.state.job}
              search={this.state.search}
            />
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={1}>
            <Profile />
            <Categories />
          </Col>
          <Col span={13}>
            <div style={{ margin: "0 15px", marginTop: "30px" }}>
              <ForYou
                handleClick={this.handleClick}
                show={this.state.show}
                job={this.state.job}
                search={this.state.search}
              />
            </div>
          </Col>
          <Col span={5}>
            <div style={{ paddingRight: "15px", marginTop: "30px" }}>
              <Recommendeds />
            </div>
            <div style={{ marginTop: "40px", paddingRight: "15px" }}>
              <Recents />
            </div>
          </Col>
       </Row>*/}
      </div>
    );
  }
}

export default App;
