import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from "./components/starRating/StarRating"
import Carousel from "./components/carousel/Carousel"

function App() {
  return (
    <div className="App">
      <h2>Accordion</h2>
      < Accordion />
      <h2> Random Color</h2>
      < RandomColor />
      <h2> Star Rating</h2>
      < StarRating/>
      <h2>Carousel</h2>
        <Carousel/>
    </div>
  );
}

export default App;
