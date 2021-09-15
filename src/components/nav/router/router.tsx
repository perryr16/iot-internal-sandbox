import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { BarGraph, GraphCard, LineGraph, PieChart, Gauge, GaugeCustom } from '../../index';

export const IotRouter: React.FC = () => {
   return (
      <Switch>
         <Route exact path="/Bar">
            <BarGraph/>
         </Route>
         <Route exact path="/Line">
            <LineGraph />
         </Route>
         <Route exact path="/Pie">
            <PieChart />
         </Route>
         <Route exact path="/Gauge">
            <div>
               <Gauge />
               <GaugeCustom />
            </div>
         </Route>
         <Route path="/">
            <GraphCard text={'home'} />
         </Route>
      </Switch>
   );
}