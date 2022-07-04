import './App.css';
// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';
const App = () => {
  return (
    <div>
      <CounterContainer />
      <Todos />
    </div>
  )
}

export default App;
