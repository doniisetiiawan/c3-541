import React, { Component } from "react";
import c3 from "c3";
import "./Chart.css";

class Chart extends Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate(prevProps) {
    if (this.props.chartType !== prevProps.chartType) {
      this.updateChart();
    }
  }

  render() {
    return <div id="chart" />;
  }

  updateChart() {
    c3.generate({
      bindto: "#chart",
      data: { columns: this.props.columns, type: this.props.chartType }
    });
  }
}

export default Chart;
