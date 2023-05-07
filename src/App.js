import './App.css';

import { Counter } from './components/counter'
import { Formular } from './components/contactform/contactform'
import LazyTilt from './components/tilt/lazy.tilt';
import Stopwatch from './components/stopwatch/stopwatch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br />
        <LazyTilt/>
        <br />
        <Stopwatch />
        <hr/>
        <hr/>
        <br />
        <Formular />
      </header>
    </div>
  );
}

export default App;
