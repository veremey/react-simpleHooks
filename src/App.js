import './App.css';

import { Counter } from './components/counter'
import { Usage } from './components/tilt/tilt'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br />
        <Usage/>
      </header>
    </div>
  );
}

export default App;
