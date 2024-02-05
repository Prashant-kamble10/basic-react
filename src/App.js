import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/randomColor/RandomColor';

function App() {
  return (
    <div className="App">
      <h2>Accordion</h2>
      < Accordion />
      <h2> Random Color</h2>
      < RandomColor />
    </div>
  );
}

export default App;
