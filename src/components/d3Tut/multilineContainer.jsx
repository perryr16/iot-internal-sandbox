import React , {useEffect, useState} from 'react';
import { MultilineChart} from '..';
import { Legend } from './legend'
import schc from '../../fixtures/SCHC.json'
import vcit from '../../fixtures/VCIT.json'
import portfolio from '../../fixtures/portfolio.json'



export const MultilineContainer = () => {
    
    const portfolioData = {
        name: "Portfolio",
        color: "#ffffff",
        items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
    };
    const schcData = {
        name: "SCHC",
        color: "#d53e4f",
        items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
    };
    const vcitData = {
        name: "VCIT",
        color: "#5e4fa2",
        items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
    };
    const dimensions = {
      width: 600,
      height: 300,
      margin: { top: 30, right: 30, bottom: 30, left: 60 }
    };

    const [selectedItems, setSelectedItems] = useState([]);
    const [unselectedItems, setUnelectedItems] = useState([]);
    const legendData = [portfolioData, schcData, vcitData];
    const chartData = [
        portfolioData, 
        ...[schcData, vcitData].filter((d) => selectedItems.includes(d.name))
    ];
    const onChangeSelection = (name) => {
        const newSelectedItems = selectedItems.includes(name)
        ? selectedItems.filter((item) => item !== name)
        : [...selectedItems, name];
        setSelectedItems(newSelectedItems);
    };
    useEffect(() => {
        const x  = 10
    }, [selectedItems, unselectedItems])

    return (
        <div>   
            <Legend 
                data={legendData}
                selectedItems={selectedItems}
                unselectedItems={unselectedItems}
                onChange={onChangeSelection}
            />
            <MultilineChart
                data={chartData}
                dimensions={dimensions}
                />
        </div>
    )
    
}