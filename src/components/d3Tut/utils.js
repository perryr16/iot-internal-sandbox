import * as d3 from 'd3';

export const getXScale = (data, width) => {
    console.log(data)
    return(
        d3.scaleTime()
            .domain(d3.extent(data, (d) => new Date(d.date)))
            .range([0, width])
  )
}

export const getYScale = (data, height, intention) => d3.scaleLinear()
    .domain([
        d3.min(data, (d) => d.value) - intention,
        d3.max(data, (d) => d.value) + intention
    ])
    .range([height, 0])

    
