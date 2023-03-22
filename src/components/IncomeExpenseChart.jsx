import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const IncomeExpenseChart = ({ totalIncome, totalExpenses, netIncome }) => {
  const chartData = [
    { category: 'Total Income', value: totalIncome },
    { category: 'Total Expenses', value: totalExpenses },
    { category: 'Net Income', value: netIncome },
  ];

  return (
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
  );
};

export default IncomeExpenseChart;
