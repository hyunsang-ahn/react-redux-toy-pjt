import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
const App = () => {
  return(
    <div>
      <Counter number={0}/>
      <Todos />
    </div>
  )
}

export default App;
