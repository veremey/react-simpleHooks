import './App.css';

import { Counter } from './components/counter'
import Stopwatch from './components/stopwatch/stopwatch'
import { Usage } from './components/tilt/tilt'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br />
        <Usage/>
        <br />
        <Stopwatch />
        <hr/>
        <hr/>
        <br />
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
