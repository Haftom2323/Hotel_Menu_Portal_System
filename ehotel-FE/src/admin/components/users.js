import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./sidebar/SidebarComponent";
import HeaderComponent from "./header/HeaderComponent";
import ContentComponent from "./content/userContent";
import "./App.css";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh"
  },
  content: {
    //marginTop: 54
    textAlign: "center"
  },
  mainBlock: {
    backgroundColor: "#F7F8FC"
    //padding: 30
  }
});

class App extends React.Component {
  state = { selectedItem: "Customers" };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => this.forceUpdate();

  render() {
    const { selectedItem } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent
          selectedItem={selectedItem}
          onChange={selectedItem => this.setState({ selectedItem })}
        />
        <Column flexGrow={1}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.content)}>
            <ContentComponent />
          </div>
        </Column>
      </Row>
    );
  }
}

export default App;
