import React, { Component } from "react";
import axios from "axios";
import Results from "./results";
import { Header, Home, FindUrJobs, Services } from "./pages";
import Footer from "./subscribe";
class App extends Component {
  state = {
    status: "",
    count: 0
  };
  handleView = itemm => {
    let menu = {
      item: itemm
    };
    axios.post("http://localhost:8000/api/searchResult", menu).then(res => {
      this.setState({ count: res.data.length });
    });
  };
  handleSub = email => {
    console.log("object", email);
    let em = {
      uemail: email
    };
    axios.post("http://localhost:8000/api/subSystem", em).then(res => {
      this.setState({ status: res.data });
      //console.log("fro", res.data);
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Home />
        <Results count={this.state.count} onSearch={this.handleView} />
        <Services />
        <Footer onSubscribe={this.handleSub} />
      </div>
    );
  }
}

export default App;
