import React , {useEffect, useState} from 'react';
import { MultilineChart} from '..';
import { Legend } from './legend'
import { linedata2, addData } from '../../fixtures/d3ChartData';
import { linedataNum, addDataNum } from '../../fixtures/d3ChartData2';



export const MultilineContainer = () => {
    const [data0, setData0] = useState(linedataNum[0])
    const [data1, setData1] = useState(linedataNum[1])
    const [time, setTime] = useState()

    const timeNow = () => {
        const dateRaw = (new Date())
        setTime(dateRaw)
    }

    const intervalMS = 200
    useEffect(() => {
        const interval = setInterval(() => {
            (timeNow())
        }, intervalMS)
        return () => clearInterval(interval)
    },[])


    useEffect(() => {
            setData0(addDataNum(data0,12))
            setData1(addDataNum(data1,4))
    },[time])


    const [screenDimensions, setScreenDimensions] = useState({
        width: window.innerWidth-500,
        height: window.innerHeight-500
    })
    // console.log('x,y', [screenDimensions.width, screenDimensions.height])

    const handleResize = () => {
        setScreenDimensions({
            width: window.innerWidth-500,
            height: window.innerHeight-500
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize, false)
    },[])

    const data2set = {
        name: 'const',
        color: 'white',
        items: data0.map((d) => ({ ...d, date: new Date(d.date) }))
    }
    const data0set = {
        name: 'Co2',
        color: "#5e4fa2",
        // items: data0.map((d) => ({ ...d, date: new Date(d.date) }))
        items: data0.map((d) => ({ ...d, date: new Date(d.date) }))
    }
    const data1set = {
        name: 'Temp',
        color: "rgb(255,0,0)",
        // items: data1.map((d) => ({ ...d, date: new Date(d.date) }))
        items: data1.map((d) => ({ ...d, date: new Date(d.date) }))
    }
    const dimensions = {
      width: screenDimensions.width - 500,
      height: (screenDimensions.width - 500) / 2,
      margin: { top: 30, right: 30, bottom: 30, left: 60 }
    };

    const [selectedItems, setSelectedItems] = useState(['Co2', 'Temp']);
    const legendData = [data0set, data1set];
    // const legendData = [portfolioData, schcData, vcitData];
    const chartData = [
        ...[data0set, data1set].filter((d) => selectedItems.includes(d.name))
        // portfolioData, 
        // ...[data0set, data1set].filter((d) => selectedItems.includes(d.name))
        // ...[linedata2[0], linedata2[1]].filter((d) => selectedItems.includes(d.name))
    ];
    const onChangeSelection = (name) => {
        console.log('onChange name', name)
        const newSelectedItems = selectedItems.includes(name)
        ? selectedItems.filter((item) => item !== name)
        : [...selectedItems, name];
        setSelectedItems(newSelectedItems);
    };
    // console.log('chartData', chartData)
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
                selectedItems={selectedItems}
                />
        </div>
    )
    
}