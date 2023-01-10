import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Home } from "./components/Home";
import { Info } from "./components/Info";
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/communication" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
