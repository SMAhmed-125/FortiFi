import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BudgetList from './pages/BudgetList';
import GoalList from './pages/GoalList';
import TransactionList from './pages/TransactionList';
import CreateBudget from './pages/CreateBudget';
import CreateGoal from './pages/CreateGoal';
import CreateTransaction from './pages/CreateTransaction';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/budgets" component={BudgetList} />
        <Route path="/goals" component={GoalList} />
        <Route path="/transactions" component={TransactionList} />
        <Route path="/budgets/new" component={CreateBudget} />
        <Route path="/goals/new" component={CreateGoal} />
        <Route path="/transactions/new" component={CreateTransaction} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
