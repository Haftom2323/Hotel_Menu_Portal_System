import Subtraction2 from "./image/Subtraction2.jpg";
import React, { Component } from "react";
import Subtraction1 from "./image/Subtraction1.jpg";

class Footer extends Component {
  state = {
    email: ""
  };
  handleButton = () => {
    this.props.onSubscribe(this.state.email);
    //console.log("email", this.state.email);
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div>
        <footer class="row   w-100">
          <div class="col-1 ">
            <img src={Subtraction1} class="img-responsive w-25 h-100" />
          </div>
          <div class="col-3">
            {/* <div class="card border-0"> */}
            <div class="card-body mb-2">
              <h4 class="card-title text-primary pb-4 ">
                Hotel Menu portal System{" "}
              </h4>
              <p class="card-text ">Our system provides hotel menu online </p>
            </div>
            {/* </div> */}
          </div>
          <div class="col-4">
            <div class="card-body mb-2">
              <h4 class="card-title text-primary pb-4">Contact us </h4>
              <ul class="list-group list-group-flush">
                <p class="font-weight-bold">Main Office</p>
                <p>MIT</p>
                <p>Mekelle , Tigray ,Ethiopia</p>
                <p>+251999999999999</p>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="card-body mb-2">
              <h4 class="card-title text-primary pb-4">Subscribe </h4>
              <form action="">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Email to Subscribe ..."
                  id="email"
                  onChange={this.handleChange}
                />
              </form>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.handleButton}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div class="col-1   ">
            <img src={Subtraction2} class="img-responsive w-25 h-100 imgleft" />
          </div>
          <small class="ml-5 pl-5 text-primary">Copyright &copy; 2019</small>
        </footer>
      </div>
    );
  }
}

export default Footer;
