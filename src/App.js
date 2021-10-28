import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Mosquito from "./components/Mosquito";

function App() {
  return (
    <div className="App">
      <h2>How many mosquitoes can you catch in 15 seconds?</h2>
      <Button title="Play again"></Button>
      <Mosquito/>
    </div>
  );
}

export default App;
