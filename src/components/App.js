import React, { Component } from "react";
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import Chart from "./Chart/Chart";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartType: "line"
    };

    this.columns = [
      ["BTC", 3000, 6000, 10000, 15000, 13000, 11000],
      ["ETH", 2000, 3000, 5000, 4000, 3000, 940],
      ["XRP", 100, 200, 300, 500, 400, 300]
    ];
  }

  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" />
        <Content>
          <Chart columns={this.columns} chartType={this.state.chartType} />
          <p>
            Chart Type
            <button onClick={this.setBarChart}>Bar</button>
            <button onClick={this.setLineChart}>Line</button>
          </p>
        </Content>
        <Footer />
      </div>
    );
  }

  setBarChart = () => {
    this.setState({
      chartType: "bar"
    });
  };

  setLineChart = () => {
    this.setState({
      chartType: "line"
    });
  };
}

export default App;
