import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const fontColor = "#4F81BD";
let renderCounter = 0;

const LineChartControl = ({
  title,
  width,
  slantlines,
  xDashAxisValues,
  xDashAxisRange,
  xAxis,
  yAxis,
  mainLine,
}) => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "16px",
        color: fontColor,
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {console.log(
        "Inside LineChart3 : ",
        title,
        width,
        slantlines,
        xDashAxisValues,
        xDashAxisRange,
        xAxis,
        yAxis,
        mainLine
      )}
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={width}
          height={400}
          margin={{
            top: 5,
            right: 60,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          {slantlines.map((line, i) => {
            return (
              <Line
                name={line.name}
                legendType={
                  line.name === "ZFW"
                    ? "square"
                    : line.name === "TKF"
                    ? "circle"
                    : line.name === "LDG"
                    ? "triangle"
                    : line.name === "DES"
                    ? "rect"
                    : ""
                }
                dataKey="y"
                xAxisId="bottom"
                yAxisId="left"
                data={line.data}
                dot={!line.shape ? false : <CustomizedDot shape={line.shape} />}
                stroke={line.color}
                strokeWidth={line.width}
                strokeOpacity={line.opacity}
                key={i}
              />
            );
          })}
          <XAxis
            key={0}
            xAxisId="bottom"
            allowDataOverflow={true}
            type="number"
            interval={0}
            tickCount={
              (Math.abs(Number(xAxis.max.ParamValue)) -
                Math.abs(Number(xAxis.min.ParamValue))) /
                Math.abs(Number(xAxis.gap.ParamValue)) +
              1
            }
            dataKey="x"
            domain={[
              Math.abs(Number(xAxis.min.ParamValue)),
              Math.abs(Number(xAxis.max.ParamValue)),
            ]}
            label={{
              value: "INDEX",
              position: "insideBottom",
              fill: fontColor,
              offset: -5,
            }}
          />
          <YAxis
            tick={{ fontSize: "10px" }}
            type="number"
            allowDataOverflow={true}
            yAxisId="left"
            interval={0}
            tickCount={
              (yAxis.max.ParamValue - yAxis.min.ParamValue) /
                yAxis.gap.ParamValue +
              1
            }
            dataKey="y"
            domain={[yAxis.min.ParamValue, yAxis.max.ParamValue]}
            label={{
              value: "AIRCRAFT WEIGHT [KG]",
              angle: -90,
              position: "left",
              fill: fontColor,
              offset: -5,
              textAnchor: "middle",
            }}
          />
          <XAxis
            xAxisId="top"
            orientation="top"
            type="number"
            ticks={xDashAxisValues}
            interval={0}
            dataKey="z"
            domain={xDashAxisRange}
            label={{
              value: "CG(%MAC)",
              position: "left",
              fill: fontColor,
              fontSize: "14px",
            }}
          />
          <Legend
            align="left"
            payload={mainLine.map((item, index) => ({
              id: item.name,
              type:
                item.name === "ZFW"
                  ? "square"
                  : item.name === "TKF"
                  ? "circle"
                  : item.name === "LDG"
                  ? "triangle"
                  : item.name === "DES"
                  ? "rect"
                  : "",
              value: `${item.name}`,
              color: item.color,
            }))}
          />
        </LineChart>
      </ResponsiveContainer>
      {console.log("LineChart3 Render", ++renderCounter)}
    </div>
  );
};

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value, shape } = props;
  // console.log(props, "Dot");
  if (shape === "circle") {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill={stroke}
        viewBox="0 0 1024 1024"
      >
        <circle cx="250" cy="250" r="200" />
      </svg>
    );
  } else if (shape === "square") {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill={stroke}
        viewBox="0 0 1024 1024"
      >
        <path d="M 50 50 H 450 V 450 H 50 Z" />
      </svg>
    );
  } else if (shape === "triangle") {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill={stroke}
        viewBox="0 0 1024 1024"
      >
        <path d="M 250,25 475,487.5 25,487.5 Z" />
      </svg>
    );
  }
};

export default LineChartControl;
