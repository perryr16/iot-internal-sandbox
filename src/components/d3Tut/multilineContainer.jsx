import React , {useEffect, useState} from 'react';
import { MultilineChart} from '..';
import { Legend } from './legend'
// import schc from '../../fixtures/SCHC.json'
// import vcit from '../../fixtures/VCIT.json'
import portfolio from '../../fixtures/portfolio.json'
import { linedata2, addData } from '../../fixtures/d3ChartData';



export const MultilineContainer = () => {
    const [data0, setData0] = useState(linedata2[0])
    const [data1, setData1] = useState(linedata2[1])
    const [time, setTime] = useState()

    const timeNow = () => {
        const dateRaw = (new Date()).toLocaleString('en-US', {hour12: true}).split(',')[1].split(':')[2].split(' ')[0]
        setTime(dateRaw)
    }

    const intervalMS = 10
    useEffect(() => {
        const interval = setInterval(() => {
            (timeNow())
        }, intervalMS)
        return () => clearInterval(interval)
    },[])


    useEffect(() => {
            setData0(addData(data0))
            setData1(addData(data1))
    },[time])

    // console.log('addData()', addData(linedata2[0]))

    // // console.log('>>> data0',data0)
    // const data0 = linedata2[0]
    // const data1 = linedata2[1]


    const [screenDimensions, setScreenDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    console.log('x,y', [screenDimensions.width, screenDimensions.height])

    const handleResize = () => {
        setScreenDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize, false)
    },[])


    const portfolioData = {
        name: "Portfolio",
        color: "#ffffff",
        items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
    };
    // const schcData = {
    //     name: "SCHC",
    //     color: "#d53e4f",
    //     items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
    // };
    // const vcitData = {
    //     name: "VCIT",
    //     color: "#5e4fa2",
    //     items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
    // };
    const data0set = {
        name: 'dog',
        color: "#5e4fa2",
        // items: data0.map((d) => ({ ...d, date: new Date(d.date) }))
        items: data0.map((d) => ({ ...d, date: new Date(d.date) }))
    }
    const data1set = {
        name: 'cat',
        color: "rgb(255,0,0)",
        // items: data1.map((d) => ({ ...d, date: new Date(d.date) }))
        items: data1.map((d) => ({ ...d, date: new Date(d.date) }))
    }
    const dimensions = {
      width: screenDimensions.width - 500,
      height: (screenDimensions.width - 500) / 2,
      margin: { top: 30, right: 30, bottom: 30, left: 60 }
    };

    const [selectedItems, setSelectedItems] = useState([]);
    const legendData = [portfolioData, data0set, data1set];
    // const legendData = [portfolioData, schcData, vcitData];
    const chartData = [
        portfolioData, 
        ...[data0set, data1set].filter((d) => selectedItems.includes(d.name))
        // ...[linedata2[0], linedata2[1]].filter((d) => selectedItems.includes(d.name))
    ];
    const onChangeSelection = (name) => {
        console.log('onChange name', name)
        const newSelectedItems = selectedItems.includes(name)
        ? selectedItems.filter((item) => item !== name)
        : [...selectedItems, name];
        setSelectedItems(newSelectedItems);
    };
    console.log('chartData', chartData)
    return (
        <div>   
            <Legend 
                data={legendData}
                selectedItems={selectedItems}
                onChange={onChangeSelection}
            />
            <MultilineChart
                data={chartData}
                dimensions={dimensions}
                />
        </div>
    )
    
}