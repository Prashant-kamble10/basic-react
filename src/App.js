import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from "./components/starRating/StarRating"
import Carousel from "./components/carousel/Carousel"
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import TreeMenu from './components/treeMenu/TreeMenu';

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
        <h2>InfiniteScroll</h2>
        <InfiniteScroll />
        <h2>Tree view/ Menu UI/ Recursive navigation</h2>
        <TreeMenu />
    </div>
  );
}

export default App;
