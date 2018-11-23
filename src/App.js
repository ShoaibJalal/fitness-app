import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layout/index";
import Exercises from "./Components/FitnessPlan/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
