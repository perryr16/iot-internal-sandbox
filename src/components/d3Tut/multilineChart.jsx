// @ts-nocheck
import React, {useRef} from "react";
import * as d3 from 'd3'
import { Area, Axis, GridLine, Line, Overlay, Tooltip } from '../index'
import useController from './multilineChart.controller.js'

export const MultilineChart = ({ data = [], dimensions = {}, selectedItems }) => {
  const overlayRef = useRef(null);
  const { width, height, margin = {} } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;
  const controller = useController({ data, width, height });
  const { yTickFormat, xScale, yScale, yScaleForAxis } = controller


  const tooltip = d3.select('.tooltip-area').style('opacity',0)

  const mouseover = (e, d) => {
    tooltip.style('opacity', 1)
  }

  const mouseleave = (e, d) => {

  }

  const colors = ['blue', 'red']

  const mousemove = (e, d) => {
    const text = d3.select('.tooltip-area__text');
    text.text(`${d.date}, ${d.value}`)
    const [x,y] = d3.pointer(e)

    tooltip.attr('transform', `translate(${x}, ${y})`)
  }

  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <GridLine
          type="vertical"
          scale={xScale}
          ticks={20}
          size={height}
          transform={`translate(0, ${height})`}
        />
        {/* <GridLine type="horizontal"  scale={yScaleForAxis} ticks={10} size={width} /> */}
        <GridLine
          type="horizontal"
          className="baseGridLine"
          scale={yScale}
          ticks={20}
          size={width}
          disableAnimation
        />
        <GridLine
          type="horizontal"
          className="baseGridLine"
          scale={yScale}
          ticks={40}
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
            animation="fadeIn"
          />
        ))}
        {selectedItems.map((item, i) => (
          <Area 
            data={data[i].items}
            color={colors[i]}
            xScale={xScale}
            yScale={yScale}
          />
        ))}

        {/* <Area 
          data={data[0].items}
          color={'blue'}
          xScale={xScale}
          yScale={yScale}
        />
        <Area 
          data={data[1].items}
          color={'red'}
          xScale={xScale}
          yScale={yScale}
        /> */}
        <Axis
          type="left"
          scale={yScale}
          transform="translate(0, 0)"
          ticks={12}
        />
        <Overlay ref={overlayRef} width={width} height={height}>
          <Axis
            type="bottom"
            className="axisX"
            scale={xScale}
            transform={`translate(10, ${height - height / 6})`}
            ticks={10}
          />
          <Tooltip
            className='tooltip'
            anchorEl={overlayRef.current}
            width={width}
            height={height}
            margin={margin}
            xScale={xScale}
            yScale={yScale}
            data={data}
          />
        </Overlay>
      </g>
    </svg>
  );
};

