import { Feelings } from './components/Feelings';
import { Needs } from './components/Needs';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = function(){
    const request = fetch("https://d-oro.github.io/NVC/feelingsAndNeeds.json")
    .then(response => response.json())
    .then(data => setData(data));
  }

  return (
    <div className="App">
      <h1>Feelings</h1>
      <Feelings data={data} />
      <br></br>
      <h1>Needs</h1>
      <Needs data={data} />
    </div>
  );
}

export default App;
