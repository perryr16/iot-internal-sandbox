import React from 'react';
import {Bar} from 'react-chartjs-2';
import './index.css'


interface Props {

}

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

export const BarGraph: React.FC<Props> = () => {
    return (
        <div className='bar-graph'>
            <Bar 
                
                data={state}
                options={{
                    title:{
                        dipaly: true,
                        text: 'average rainfall',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right',
                    }
                }}
            />
        </div>
    );
}