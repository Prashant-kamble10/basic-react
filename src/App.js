import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from "./components/starRating/StarRating"
import Carousel from "./components/carousel/Carousel"
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import TreeMenu from './components/treeMenu/TreeMenu';
import "./components/treeMenu/TreeMenu.css"
import QrCodeIndex from './components/qrCode/QrCodeIndex';
import DarkModeIndex from "./components/darkMode/DarkModeIndex";

function App() {
  return (
    <div className="App">
      <h2>1. Accordion</h2>
      < Accordion />
      <h2>2. Random Color</h2>
      < RandomColor />
      <h2>3. Star Rating</h2>
      < StarRating/>
      <h2>4. Carousel</h2>
        <Carousel/>
        <h2>5. InfiniteScroll</h2>
        <InfiniteScroll />
        <h2>6. Tree view/ Menu UI/ Recursive navigation</h2>
       <div className="menu">
       <TreeMenu />
       </div>
       <h2>7. QR Code Generator</h2>
       <QrCodeIndex />
       <h2>8. Light & Dark Mode/ Theme Switch</h2>
        <DarkModeIndex />
    </div>
  );
}

export default App;
