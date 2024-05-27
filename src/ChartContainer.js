import React from 'react'
import LineChartMy from './LineChartMy'
import BarChartMy from './BarChartMy'


const ChartContainer = () => {
  return (
    <div
     style={{display:'flex', justifyContent:'space-around', marginTop:'100px'}}>
        <LineChartMy />
        <BarChartMy />
      
    </div>
  )
}

export default ChartContainer
