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
          <Route path="/info" element={<Info/>}/>
          <Route path="/communication" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
