import React, {useRef, useEffect, useCallback} from 'react';
import * as d3 from 'd3';

export const Line = ({
    xScale, yScale, color, data, animation, ...props
}) => {
    const ref = useRef(null);
    // Define different types of animation that we can use
    const animateLeft = useCallback(() => {
        const totalLength = ref.current.getTotalLength();
        d3.select(ref.current)
        .attr("opacity", 1)
        .attr("stroke-dasharray", `${totalLength},${totalLength}`)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1200)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    }, []);
    const animateFadeIn = useCallback(() => {
        d3.select(ref.current)
        .transition()
        .duration(750)
        .ease(d3.easeLinear)
        .attr("opacity", 1);
    }, []);
    const noneAnimation = useCallback(() => {
        d3.select(ref.current).attr("opacity", 1);
    }, []);
    const animateNewData = useCallback(() => {
        const totalLength = ref.current.getTotalLength();
        d3.select('.line')
        .transition()
        .duration(2000)
        .attr('d', line)


    })
 
    useEffect(() => {
        switch (animation) {
        case "left":
            animateLeft();
            break;
        case "fadeIn":
            animateFadeIn();
            break;
        case "none":
        default:
            noneAnimation();
            break;
        }
        animateNewData()
    }, [animateLeft, animateFadeIn, noneAnimation, animation, data]);
 
 // Recalculate line length if scale has changed
    useEffect(() => {
        if (animation === "left") {
        const totalLength = ref.current.getTotalLength();
        d3.select(ref.current).attr(
            "stroke-dasharray",
            `${totalLength},${totalLength}`
        );
        }
    }, [xScale, yScale, animation]);
 
  const line = d3.line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value))
    .curve(d3.curveCatmullRom.alpha(0.1))
    
 
  return (
    <path
      ref={ref}
      d={line(data)}
      stroke={color}
      strokeWidth={3}
      fill="none"
      opacity={0}
      {...props}
    />
  );




}