import React, { Component } from "react";
import { Row, Col, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AlcholicDrinks, softDrinks, fasting } from "../user Page/menus";
import Navbar from "./Navbar";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Upload from "./upload";
import Profile from "./profile";
class hotelView extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      errors: [],
      success: "",
      show: false,
      showIt: false,
      showOn: false,
      type: "",
      name: "",
      price: "",
      editedName: "",
      searchedItem: "",
      editedPrice: "",
      edit: false,
      editItem: {},
      deleteItem: {},
      delete: false,
      items: [],
      hotelId: 34,
      softDrinks: [],
      alcoholDrinks: [],
      foods: [],
      searchValue: "",
      search: false
    };
  }
  handleContent = contentTitle => {
    this.setState({ content: contentTitle });
  };
  handleSearchValue = event => {
    this.setState({ searchValue: event.target.value });
    console.log(event.target.value);
  };
  handleSearch = e => {
    e.preventDefault();
    console.log(" from axios", this.state.searchValue);
    let value = { searchValue: this.state.searchValue };
    axios.post("http://localhost:8000/api/searchItem", value).then(res => {
      this.setState({ searchedItem: res.data });
      console.log(res.data);
    });
  };
  handleEditShow = item => {
    this.setState({
      edit: true,
      editItem: item,
      editedName: item.name,
      editedPrice: item.price,
      type: item.type
    });
    console.log(item);
  };

  handleDeleteShow = item => {
    this.setState({ delete: true, deleteItem: item });
    console.log(item);
  };

  handleshow = () => {
    this.setState({ show: true, type: "food" });
  };
  // handleYes = () => {
  //   console.log("from handel yes");
  // };
  handleYes = () => {
    let deleteItem = this.state.deleteItem;
    console.log("u r deleting", deleteItem);
    this.setState({ delete: false });
    axios
      .post("http://localhost:8000/api/deleteItem", deleteItem)
      .then(res => {
        if (res.status == 200) console.log("item successfully added");
        this.setState({ success: res.data.message });
        this.componentWillMount();
        /// <Redirect to="/" />;
      })
      .catch(e => this.state.errors.push(e));
    //console.log(this.state.name + "  " + this.state.price);
    // this.setState({ show: false });
  };
  handleshowIt = () => {
    this.setState({ showIt: true, type: "softDrink" });
  };
  handleshowOn = () => {
    this.setState({ showOn: true, type: "alcoholDrink" });
  };
  handleClose = () => {
    this.setState({
      show: false,
      showIt: false,
      showOn: false,
      edit: false,
      delete: false
    });
  };

  // handleCloseDelete = () => {
  //   this.setState({ delete: false });
  // };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSave = () => {
    let addedItem = {
      name: this.state.name,
      price: this.state.price,
      type: this.state.type,
      hotelId: this.state.hotelId
    };
    console.log(
      "Name=" +
        this.state.name +
        " price=" +
        this.state.price +
        "type=" +
        addedItem.type
    );
    axios
      .post("http://localhost:8000/api/addMenus", addedItem)
      .then(res => {
        this.setState({ items: res.data, success: res.data.message });
        setTimeout(() => {
          this.setState({ success: "" });
        }, 8000);
        console.log(res.data.message);
      })
      .then(() => {
        this.componentWillMount();
      })
      .catch(e => this.state.errors.push(e));
    this.setState({ show: false, showIt: false, showOn: false });
  };
  handleSaveChanges = () => {
    let editedItem = {
      name: this.state.editedName,
      price: this.state.editedPrice,
      id: this.state.editItem.menu_id,
      type: this.state.type
    };
    console.log(
      "Name=" +
        this.state.editedName +
        " price=" +
        this.state.editedPrice +
        "And type=" +
        this.state.type
    );
    // console.log(editedItem);

    axios
      .post("http://localhost:8000/api/editMenus", editedItem)
      .then(res => {
        this.setState({ success: res.data });
        console.log("response message", res.data);
      })
      .then(() => {
        this.componentWillMount();
      })
      .catch(e => {
        this.state.errors.push(e);
        console.log(e);
      });
    this.setState({ edit: false });
  };
  componentWillMount = () => {
    let hotelIdd = {
      hotelId: this.state.hotelId
    };
    console.log("hotelIdd", hotelIdd);
    axios
      .post("http://localhost:8000/api/menus", hotelIdd)
      .then(res => this.setState({ items: res.data }))
      .then(() => {
        const foods = this.state.items.filter(i => i.type === "food");
        const softDrinks = this.state.items.filter(i => i.type === "softDrink");
        const alcoholDrinks = this.state.items.filter(
          i => i.type === "alcoholDrink"
        );
        this.setState({
          softDrinks: softDrinks,
          alcoholDrinks: alcoholDrinks,
          foods: foods
        });
      })
      .catch(e => this.state.errors.push(e));
    setTimeout(() => {
      this.setState({ success: "" });
    }, 8000);
  };

  render() {
    console.log("items", this.state.items);
    console.log("success msg", this.state.success);
    const { foods, alcoholDrinks, softDrinks } = this.state;
    let searched = this.state.searchedItem
      ? this.state.searchedItem.map(i => (
          <div style={{ marginBottom: 20 }}>
            <li
              style={{ borderBottom: "1px solid green", listStyle: "none" }}
              key={i.name}
            >
              <Row>
                <Col lg={{ span: 5, offset: 2 }} xs={12}>
                  <p style={{ textAlign: "center" }}>{i.name}</p>
                </Col>
                <Col lg={{ span: 5 }} xs={{ span: 8 }}>
                  {i.price}
                </Col>
                <Col lg={4}>
                  <Button
                    style={{ backgroundColor: "grey" }}
                    onClick={() => this.handleEditShow(i)}
                  >
                    Edit
                    <span>
                      <Icon type="edit"></Icon>
                    </span>
                  </Button>
                  <Button
                    // style={{ backgroundColor: "red" }}
                    //className="btn btn-danger"
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteShow(i)}
                  >
                    Delete
                    <span>
                      <Icon type="delete"></Icon>
                    </span>
                  </Button>
                </Col>
              </Row>
            </li>
          </div>
        ))
      : null;
    //else
    console.log("this.state.searchedItem", this.state.searchedItem);
    //let searched="no search value"
    const ss = this.state.searchedItem.name;

    return (
      <div>
        <Navbar
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          handleSearchValue={this.handleSearchValue}
          handleContent={this.handleContent}
        />

        {this.state.content == "profile" ? (
          <Profile />
        ) : (
          <div>
            <div>
              <h2 style={{ backgroundColor: "gray", textAlign: "center" }}>
                List of menus
              </h2>
              {searched}
              {this.state.success ? (
                <div
                  style={{
                    backgroundColor: "green",
                    textAlign: "center",
                    marginTop: 0
                  }}
                >
                  <p style={{ fontSize: 20 }}>{this.state.success}</p>
                </div>
              ) : null}
            </div>

            <Row>
              <Col
                lg={{ span: 7, offset: 1 }}
                xs={{ span: 8, offset: 0 }}
                style={{ backgroundColor: "#DDDDDD" }}
              >
                <h3>Foods</h3>
                <Row style={{ fontFamily: "cursive" }}>
                  <Col lg={{ span: 7 }} xs={{ span: 7 }}>
                    <b>
                      <i>
                        <u>Item</u>
                      </i>
                    </b>
                  </Col>
                  <Col lg={{ span: 6 }} xs={{ span: 6 }}>
                    <b>
                      <i>
                        <u>Price</u>
                      </i>
                    </b>
                  </Col>
                  <Col lg={{ span: 11 }} xs={{ span: 11 }}>
                    <b>
                      <i>
                        <u>Action</u>
                      </i>
                    </b>
                  </Col>
                </Row>
                <ol style={{ marginLeft: 10 }}>
                  {foods.map(food => (
                    <li
                      style={{
                        borderBottom: "1px solid green",
                        listStyle: "none"
                      }}
                      key={food.name}
                    >
                      <Row>
                        <Col lg={7} xs={5}>
                          {food.name}
                        </Col>
                        <Col lg={6} xs={5}>
                          {food.price}
                        </Col>
                        <Col lg={11} xs={14}>
                          <Button
                            style={{ backgroundColor: "grey" }}
                            //className="btn btn-primary"
                            onClick={() => this.handleEditShow(food)}
                          >
                            Edit
                            <span>
                              <Icon type="edit"></Icon>
                            </span>
                          </Button>
                          <Button
                            // className="btn btn-danger"
                            style={{ backgroundColor: "red" }}
                            onClick={() => this.handleDeleteShow(food)}
                          >
                            Delete
                            <span>
                              <Icon type="delete"></Icon>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  ))}
                </ol>
                <Row>
                  <Col>
                    <Modal show={this.state.edit} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>edit menu</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form className="pt-4">
                          <h4>
                            <label>Food Item:</label>
                            <input
                              type="text"
                              className="form-control1 pt-1"
                              id="editedName"
                              onChange={this.handleChange}
                              defaultValue={this.state.editItem.name}
                            />
                          </h4>
                          <h4>
                            <label className="pl-1"> Price:</label>
                            <input
                              type="number"
                              className="form-control1 pt-1"
                              id="editedPrice"
                              onChange={this.handleChange}
                              defaultValue={this.state.editItem.price}
                            />
                          </h4>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cancel
                        </Button>
                        <button
                          variant="primary"
                          onClick={this.handleSaveChanges}
                        >
                          Save changes
                        </button>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.delete} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete menu</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h4>
                          Are you sure you want to delete this item permanently
                        </h4>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cancel
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      onClick={this.handleshow}
                      type="button"
                      style={{ backgroundColor: "green", borderRadius: 10 }}
                    >
                      Add food item
                    </Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Add new Food Item With its price
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form className="pt-4">
                          <h4>
                            <label>Food Item:</label>
                            <input
                              type="text"
                              className="form-control1 pt-1"
                              id="name"
                              onChange={this.handleChange}
                            />
                          </h4>
                          <h4>
                            <label
                              className="pl-1"
                              onChange={this.handleChange}
                            >
                              Price:
                            </label>
                            <input
                              type="number"
                              className="form-control1 pt-1"
                              id="price"
                              onChange={this.handleChange}
                            />
                          </h4>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className="btn btn-danger"
                          onClick={this.handleClose}
                        >
                          Cancel
                        </Button>
                        <button variant="primary" onClick={this.handleSave}>
                          Add Item
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ span: 7, offset: 1 }}
                xs={{ span: 8 }}
                style={{ backgroundColor: "#DDDDDD" }}
              >
                <h3>Soft Drinks</h3>
                <Row>
                  <Col lg={{ span: 7 }} xs={{ span: 7 }}>
                    {" "}
                    <b>
                      <i>
                        <u>Item</u>
                      </i>
                    </b>
                  </Col>
                  <Col lg={{ span: 6 }} xs={{ span: 6 }}>
                    <b>
                      <i>
                        <u>Price</u>
                      </i>
                    </b>
                  </Col>
                  <Col lg={{ span: 11 }} xs={{ span: 11 }}>
                    <b>
                      <i>
                        <u>Action</u>
                      </i>
                    </b>
                  </Col>
                </Row>
                <ol style={{ marginLeft: 10 }}>
                  {softDrinks.map(softDrink => (
                    <li
                      style={{
                        borderBottom: "1px solid green",
                        listStyle: "none"
                      }}
                      key={softDrink.name}
                    >
                      <Row>
                        <Col lg={7} xs={7}>
                          {softDrink.name}
                        </Col>
                        <Col lg={6} xs={6}>
                          {softDrink.price}
                        </Col>
                        <Col lg={11} xs={11}>
                          <Button
                            style={{ backgroundColor: "grey" }}
                            //className="btn btn-primary"
                            onClick={() => this.handleEditShow(softDrink)}
                          >
                            Edit
                            <span>
                              <Icon type="edit"></Icon>
                            </span>
                          </Button>
                          <Button
                            style={{ backgroundColor: "red" }}
                            //className="btn btn-danger"
                            onClick={() => this.handleDeleteShow(softDrink)}
                          >
                            Delete
                            <span>
                              <Icon type="delete"></Icon>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  ))}
                </ol>
                <Row>
                  <Col>
                    <Button
                      onClick={this.handleshowIt}
                      type="button"
                      style={{ backgroundColor: "green", borderRadius: 10 }}
                    >
                      Add soft drink item
                    </Button>
                    <Modal show={this.state.showIt} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Add new Soft Drink Item With its price
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form className="pt-4">
                          <h4>
                            <label>Soft Drink Item:</label>
                            <input
                              type="text"
                              className="form-control1 pt-1"
                              id="name"
                              onChange={this.handleChange}
                            />
                          </h4>
                          <h4>
                            <label
                              className="pl-1"
                              onChange={this.handleChange}
                            >
                              Price:
                            </label>
                            <input
                              type="number"
                              className="form-control1 pt-1"
                              id="price"
                              onChange={this.handleChange}
                            />
                          </h4>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cancel
                        </Button>
                        <button variant="primary" onClick={this.handleSave}>
                          Add Item
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ span: 7, offset: 1 }}
                xs={{ span: 8 }}
                style={{ backgroundColor: "#DDDDDD" }}
              >
                <h3>Alcoho Drinks</h3>
                <Row>
                  <Col lg={{ span: 7 }} x={{ span: 7 }}>
                    <b>
                      <i>
                        <u>Item</u>
                      </i>
                    </b>
                  </Col>
                  <Col lg={{ span: 6 }} xs={{ span: 6 }}>
                    <b>
                      <i>
                        <u>Price</u>
                      </i>
                    </b>
                  </Col>
                  <Col lg={{ span: 11 }} xs={{ span: 11 }}>
                    <b>
                      <i>
                        <u>Action</u>
                      </i>
                    </b>
                  </Col>
                </Row>
                <ol style={{ marginLeft: 10 }}>
                  {alcoholDrinks.map(alcoholDrink => (
                    <li
                      style={{
                        borderBottom: "1px solid green",
                        listStyle: "none"
                      }}
                      key={alcoholDrink.name}
                    >
                      <Row>
                        <Col lg={7} xs={7}>
                          {alcoholDrink.name}
                        </Col>
                        <Col lg={6} xs={6}>
                          {alcoholDrink.price}
                        </Col>
                        <Col lg={11} xs={11}>
                          <Button
                            style={{ backgroundColor: "grey" }}
                            //className="btn btn-primary"
                            onClick={() => this.handleEditShow(alcoholDrink)}
                          >
                            Edit
                            <span>
                              <Icon type="edit"></Icon>
                            </span>
                          </Button>
                          <Button
                            style={{ backgroundColor: "red" }}
                            //className="btn btn-danger"
                            onClick={() => this.handleDeleteShow(alcoholDrink)}
                          >
                            Delete
                            <span>
                              <Icon type="delete"></Icon>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  ))}
                </ol>
                <Row>
                  <Col>
                    <Modal show={this.state.edit} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>edit menu</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form className="pt-4">
                          <h4>
                            <label>Item:</label>
                            <input
                              type="text"
                              className="form-control1 pt-1"
                              id="editedName"
                              onChange={this.handleChange}
                              defaultValue={this.state.editItem.name}
                            />
                          </h4>
                          <h4>
                            <label className="pl-1"> Price:</label>
                            <input
                              type="number"
                              className="form-control1 pt-1"
                              id="editedPrice"
                              onChange={this.handleChange}
                              defaultValue={this.state.editItem.price}
                            />
                          </h4>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cancel
                        </Button>
                        <button
                          variant="primary"
                          onClick={this.handleSaveChanges}
                        >
                          Save changes
                        </button>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.delete} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete menu</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h4>
                          Are you sure you want to delete this item permanently
                        </h4>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cancel
                        </Button>
                        <button variant="primary" onClick={this.handleYes}>
                          Yes
                        </button>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      onClick={this.handleshowOn}
                      type="button"
                      style={{ backgroundColor: "green", borderRadius: 10 }}
                    >
                      Add alcohol drink item
                    </Button>
                    <Modal show={this.state.showOn} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Add new alcohol Drink Item With its price
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form className="pt-4">
                          <h4>
                            <label>Alcohol Drink Item:</label>
                            <input
                              type="text"
                              className="form-control1 pt-1"
                              id="name"
                              onChange={this.handleChange}
                            />
                          </h4>
                          <h4>
                            <label
                              className="pl-1"
                              onChange={this.handleChange}
                            >
                              Price:
                            </label>
                            <input
                              type="number"
                              className="form-control1 pt-1"
                              id="price"
                              onChange={this.handleChange}
                            />
                          </h4>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cancel
                        </Button>
                        <button variant="primary" onClick={this.handleSave}>
                          Add Item
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}

        <div style={{ marginTop: 30, marginLeft: "1%" }}>
          <Link to="/upload">
            <h3 style={{ color: "blue" }}>
              <u>#Other Services</u>
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default hotelView;
