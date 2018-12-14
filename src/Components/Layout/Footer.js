import React, { Component } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default class Footer extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {this.props.muscles.map(category => (
            <Tab label={category} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}
