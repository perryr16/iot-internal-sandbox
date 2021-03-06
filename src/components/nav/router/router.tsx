import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { 
   BarGraph, 
   GraphCard, 
   LineGraph, 
   PieChart, 
   Gauge, 
   GaugeCustom, 
   GaugeIC,
   Gauge34,
   GaugeHalf,
   MultilineContainer,
   LineNivo,
   LineNivoCanvas,
   PerformanceContainer
} from '../../index';
import { lineNivoData } from '../../../fixtures/lineNivoData';
import { lineNivoData2 } from '../../../fixtures/lineNivoData2'
import { lineNivoData3 } from '../../../fixtures/lineNivoData3'

export const IotRouter: React.FC = () => {
   return (
      <Switch>
         <Route exact path="/Bar">
            <GraphCard >
               <BarGraph/>
            </ GraphCard>
         </Route>
         <Route exact path="/Line">
            <GraphCard >
               <LineGraph />
            </ GraphCard>
         </Route>
         <Route exact path="/Pie">
            <GraphCard >
               <PieChart />
            </ GraphCard>
         </Route>
         <Route exact path="/Gauge">
            <GraphCard>
               <PerformanceContainer/>
               <Gauge />
               <GaugeCustom />
            </GraphCard>
         </Route>
         <Route exact path="/LineNivo">
            <GraphCard>
               {/* <LineNivo data={lineNivoData} /> */}
               <LineNivoCanvas data={lineNivoData} />
            </GraphCard>
         </Route>
         <Route exact path="/d3Line">
            <GraphCard>
               {/* <LineNivoCanvas data={lineNivoData} /> */}
               <p style={{backgroundColor: 'red', width: '1000px', margin: 'auto'}}>D3 Line</p>
               <MultilineContainer/>

            </GraphCard>
         </Route>
         <Route path="/">
            <h1>Home</h1>
         </Route>
      </Switch>
   );
}