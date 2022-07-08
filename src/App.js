import './App.css';
// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
const App = () => {
  return (
    <div>
      <CounterContainer />
      <TodosContainer />
    </div>
  )
}

export default App;
