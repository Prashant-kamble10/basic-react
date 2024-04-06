import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from "./components/starRating/StarRating"
import Carousel from "./components/carousel/Carousel"
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import TreeMenu from './components/treeMenu/TreeMenu';
import "./components/treeMenu/TreeMenu.css";
import QrCodeIndex from './components/qrCode/QrCodeIndex';
import DarkModeIndex from "./components/darkMode/DarkModeIndex";
import ScrollDisplay from "./components/scroll_Display/ScrollDisplay";
import TabChange from './components/tabChange/TabChange';
import BoxPopup from './components/boxPopup/BoxPopup';



function App() {
  return (
    <div className="App">
      
        <ScrollDisplay />
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
        <h2>9. Scroll Indicator</h2>
        <h2>10. Tab change</h2>
        <TabChange />
        <h2>11. Modal Popup/Box Popup</h2>
        <BoxPopup />
    </div>
  );
}

export default App;
