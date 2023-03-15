import IncomeInputs from './components/IncomeInputs';
import AmountSpent from './components/AmountSpent';
function App() {
  return (
    <div>
      <h1>Enter Your Incomes Here</h1>
      
      <IncomeInputs />
      <h1>Enter Your Expenses </h1>
      <AmountSpent/>
    </div>
  )
}

export default App;
