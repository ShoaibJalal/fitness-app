import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layout/index";
import Exercises from "./Components/FitnessPlan/index";
import { exercises, muscles } from "./store";

class App extends Component {
  state = {
    exercises
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
