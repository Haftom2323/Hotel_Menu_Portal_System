import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import MiniCardComponent from "./MiniCardComponent";
import TodayTrendsComponent from "./TodayTrendsComponent";
import UnresolvedTicketsComponent from "./UnresolvedTicketsComponent";
import TasksComponent from "./TasksComponent";
import Axios from "axios";

const styles = StyleSheet.create({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0
    }
  },
  miniCardContainer: {
    flexGrow: 1,
    padding: 30,
    height: 100,
    border: "2px solid red",
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none"
    }
  },
  todayTrends: {
    marginTop: 30
  },
  lastRow: {
    marginTop: 30
  },
  unresolvedTickets: {
    marginRight: 30,
    "@media (max-width: 1024px)": {
      marginRight: 0
    }
  },
  tasks: {
    marginTop: 0,
    "@media (max-width: 1024px)": {
      marginTop: 30
    }
  }
});

class ContentComponent extends Component {
  state = {
    dashBoard: ""
  };
  componentWillMount = () => {
    Axios.get("http://localhost:8000/api/admindashbord")
      .then(res => {
        if (res.status == 200) {
          console.log("dashboard", res.data);
          this.setState({ dashBoard: res.data });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Column>
        <Row
          className={css(styles.cardsContainer)}
          wrap
          flexGrow={1}
          horizontal="space-between"
          breakpoints={{ 768: "column" }}
        >
          <Row
            className={css(styles.cardRow)}
            wrap
            flexGrow={1}
            horizontal="space-between"
            breakpoints={{ 384: "column" }}
          >
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Customers"
              value={this.state.dashBoard.customers}
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Menus"
              value={this.state.dashBoard.menus}
            />
          </Row>
          <Row
            className={css(styles.cardRow)}
            wrap
            flexGrow={1}
            horizontal="space-between"
            breakpoints={{ 384: "column" }}
          >
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Hotels"
              value={this.state.dashBoard.hotels}
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Subscribers"
              value={this.state.dashBoard.subscribers}
            />
          </Row>
        </Row>

        <Row
          horizontal="space-between"
          className={css(styles.lastRow)}
          breakpoints={{ 1024: "column" }}
        ></Row>
      </Column>
    );
  }
}

export default ContentComponent;
