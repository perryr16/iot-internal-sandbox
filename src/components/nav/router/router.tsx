import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { BarGraph, GraphCard, LineGraph, PieChart } from '../../index';

export const IotRouter: React.FC = () => {
   return (
      <Switch>
         <Route exact path="/CO2">
            <BarGraph/>
         </Route>
         <Route exact path="/Temp">
            <LineGraph />
         </Route>
         <Route exact path="/Humidity">
            <PieChart />
         </Route>
         <Route path="/">
            <GraphCard text={'home'} />
         </Route>
      </Switch>
   );
}