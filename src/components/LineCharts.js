import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Refer the high charts "https://github.com/highcharts/highcharts-react" for more information

const LineCharts = (props) => {
  const config = {
    chart: {
      type: "line",  // Change the type to 'line' for line chart
    },
    title: {
      text: props.title,
    },
    xAxis: {
      categories: props.data.map(item => item.month), // X-axis categories based on the data
      title: {
        text: "Months",
      },
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Issues",
      },
    },
    legend: {
      enabled: true, // Show the legend for the line chart
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>", // Tooltip when hovering over points
    },
    series: [
      {
        name: props.title,
        data: props.data.map(item => item.count), // Line chart data points
        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
        marker: {
          enabled: true, // Display markers on data points
          symbol: "circle",
          radius: 4,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
      ></HighchartsReact>
    </div>
  );
};

export default LineCharts;
