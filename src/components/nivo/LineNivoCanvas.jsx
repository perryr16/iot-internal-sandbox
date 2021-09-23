import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import './index.css'
import { reduce } from 'd3-array'

export const LineNivoCanvas = ({ data }) => {

    return(
    <div className='nivo-chart'>
        
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
            xScale={{ type: 'linear'}}
            yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto'}}
            pointBorderColor={'green'}
            yFormat=" >-.2f"
            curve="monotoneX"
            axisTop={null}
            axisRight={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: '.2s',
                legend: '',
                legendOffset: 0,

                
            }}
            axisBottom={{
                tickSize: 'auto',
                tickPadding: 'auto',
                tickRotation: 0,
                format: '.2f',
                legend: 'Time',
                legendOffset: 36,
                legendPosition: 'middle',

            }}
            axisLeft={{
                tickSize: 'auto',
                tickPadding: 'auto',
                tickRotation: 0,
                format: '.2s',
                legend: 'PPM',
                legendOffset: -40,
                legendPosition: 'middle',
                symbolBorderColor: 'rgb(0,255,0)'

            }}
            enableGridX={true}

            // colors={{ scheme: 'spectral' }}
            colors={{ scheme: 'pastel2' }}
            lineWidth={1}
            pointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={1}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            // gridXValues={[]}
            // gridYValues={[ 0, 500, 1000, 1500, 2000, 2500 ]}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 140,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 12,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    itemTextColor: 'rgba(255, 255, 0)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            theme={{textColor: 'rgb(0,255,0)'}}
        />
    </div>
    )
}