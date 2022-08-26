import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Beers from "./views/Beers";
import NewBeer from "./views/NewBeer"
import RandomBeer from "./views/RandomBeer"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element ={<Beers />} />
        <Route path="/new-beer" element ={<NewBeer />} />
        <Route path="/random-beer" element ={<RandomBeer />} />
      </Routes>
    </div>
  );
}
export default App;
