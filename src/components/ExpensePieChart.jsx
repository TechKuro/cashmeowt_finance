import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const ExpensePieChart = ({ optionValues }) => {
  const data = Object.entries(optionValues).map(([key, value]) => ({
    x: key,
    y: value,
  }));

  const colorScale = [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
  ];

  return (<div id='charts' className='max-w-[1140px] m-auto w-full p-10 bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
  <div className='lg:flex lg:justify-center w-full items-center'>
  <div className='flex flex-col my-2 py-2'>
    <div className="relative mt-2 rounded-md shadow-sm">
    </div>
    <div style={{ minHeight: '200px' }}>
      <svg viewBox="0 0 300 200" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          width={300}
          height={200}
          data={data}
          innerRadius={34}
          labelRadius={50}
          style={{ labels: { fontSize: 15, fill: 'black' } }}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          colorScale={colorScale}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 16 }}
          x={150}
          y={100}
          text="Expenses"
        />
      </svg>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ExpensePieChart;