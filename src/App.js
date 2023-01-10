import { Needs } from './components/Needs';
import { Feelings } from './components/Feelings';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Feelings</h1>
      <Feelings />
      <br></br>
      <h1>Needs</h1>
      <Needs />
    </div>
  );
}

export default App;
