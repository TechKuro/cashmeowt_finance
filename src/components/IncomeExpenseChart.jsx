import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const IncomeExpenseChart = ({ totalIncome, totalExpenses, netIncome }) => {
  const chartData = [
    { category: 'Total Income', value: totalIncome },
    { category: 'Total Expenses', value: totalExpenses },
    { category: 'Net Income', value: netIncome },
  ];

  return (<div id='charts' className='max-w-[1140px] m-auto w-full p-10 bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
  <div className='lg:flex flex-col lg:justify-between w-full items-center'>
  <div className='flex flex-col my-2 py-2'>
    <div className="relative mt-2 rounded-md shadow-sm">
    </div>
    
    <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
      width={400}
      height={250}
    >
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={chartData}
        x="category"
        y="value"
        style={{
          data: {
            fill: ({ datum }) =>
              datum.category === 'Total Expenses' ? 'red' : 'green',
          },
        }}
      />
    </VictoryChart>
    </div>
    </div>
    </div>
  );
};

export default IncomeExpenseChart;
