import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const IncomeExpenseChart = ({ totalIncome, totalExpenses, netIncome }) => {
  const chartData = [
    { category: 'Total Income', value: totalIncome },
    { category: 'Total Expenses', value: totalExpenses },
    { category: 'Net Income', value: netIncome },
  ];

  return (
    <div style={{ width: '300px', height: '200px', position: 'relative' }}>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        width={300}
        height={200}
        style={{
          parent: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
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
  );
};

export default IncomeExpenseChart;
