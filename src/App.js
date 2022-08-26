import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Beers from "./views/Beers";
import NewBeer from "./views/NewBeer"
import RandomBeer from "./views/RandomBeer"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
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
