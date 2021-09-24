/** MultilineChart.js */
// @ts-nocheck
import React, {useRef, useEffect, useState, useMemo} from "react";
import * as d3 from "d3";
import { 
  drawAxis,
  getXScale,
  getYScale,
  drawLine,
  animateLine,
} from './utils'
import { Area, Axis, GridLine, Line } from '../index'
import useController from './multilineChart.controller.js'

export const MultilineChart = ({ data = [], dimensions = {} }) => {
  const { width, height, margin = {} } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;
  const controller = useController({ data, width, height });
  const { yTickFormat, xScale, yScale, yScaleForAxis } = controller

  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <GridLine
          type="vertical"
          scale={xScale}
          ticks={5}
          size={height}
          transform={`translate(0, ${height})`}
        />
        <GridLine type="horizontal"  scale={yScaleForAxis} ticks={2} size={width} />
        <GridLine
          type="horizontal"
          className="baseGridLine"
          scale={yScale}
          ticks={1}
          size={width}
          disableAnimation
        />
        {data.map(({ name, items = [], color }) => (
          <Line
            key={name}
            data={items}
            xScale={xScale}
            yScale={yScale}
            color={color}
            animation="left"
          />
        ))}
        <Area 
          data={data[0].items}
          color={data[0].color}
          xScale={xScale}
          yScale={yScale}
        />
        <Axis
          type="left"
          scale={yScaleForAxis}
          transform="translate(0, -10)"
          ticks={5}
          tickFormat={yTickFormat}
        />
        <Axis
          type="bottom"
          className="axisX"
          scale={xScale}
          transform={`translate(10, ${height - height / 6})`}
          ticks={5}
        />
      </g>
    </svg>
  );
};

