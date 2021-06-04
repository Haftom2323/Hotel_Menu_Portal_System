import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import App from "./App";
import UserManagement from "./admin/components/App";
//import JobSeekerDetails from "./Components/JobSeekerDetails";
import AdminDashBoard from "./admin/components/App";
import LandingPage from "./LandingPage/App";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import JobPost from "./Components/JobPost";
import AdminUsers from "./admin/components/users";
import AdminHotels from "./admin/components/hotels";
import Setting from "./admin/components/setting";
import HotelView from "./user Page/hotelView";
import UserPage from "./user Page/user";
import HotelPage from "./Hotel Page/hotel";
import MapComponent from "./user Page/map";
import Upload from "./Hotel Page/upload";
import NotificationDetail from "./admin/components/header/notificationDetail";
import ForgotPassword from "./Components/forgotPassword";
import PasswordChange from "./Components/passwordChange";
const routing = (
  <Router>
    <Route path="/upload" component={Upload} />
    <Route path="/passwordChange" component={PasswordChange} />
    <Route path="/forgotPassword" component={ForgotPassword} />
    <Route path="/adminUsers" component={AdminUsers} />
    <Route path="/adminDashBoard" component={AdminDashBoard} />
    <Route path="/adminHotels" component={AdminHotels} />
    <Route exact path="/" component={LandingPage} />
    <Route path="/admin" component={UserManagement} />
    <Route path="/admin" component={UserManagement} />
    <Route path="/Landingpage" component={LandingPage} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Setting" component={Setting} />
    <Route path="/Login" component={Login} />
    <Route path="/JobPost" component={JobPost} />
    <Route path="/hotelView" component={HotelView} />
    <Route path="/customer" component={UserPage} />
    <Route path="/hotel" component={HotelPage} />
    <Route path="/map" component={MapComponent} />
    <Route path="/notificationDetail/:id" component={NotificationDetail} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
