import "./App.css";
import Button from "./components/Button";
import Mosquito from "./components/Mosquito";
import Counter from "./components/Counter";
import { useState, useEffect, useRef } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(15);
  const [running, setGameState] = useState(false);
  const timeCallback = useRef();

  const startTimeout = () => {
    timeCallback.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  const resetTimeout = () => {
    clearTimeout(timeCallback.current);
    setTime(15);
    startTimeout();
  };

  useEffect(() => {
    startTimeout();
    return () => clearTimeout(timeCallback.current);
  }, [running]);

  useEffect(() => {
    if (time === 0) {
      clearTimeout(timeCallback.current);
    }
  }, [time]);

  return (
    <div className="App">
      <h2>How many mosquitoes can you catch in {time} seconds?</h2>
      <Mosquito />
      <Button
        title="Play again"
        onClick={() => {
          resetTimeout();
        }}
      ></Button>
      <Counter number={counter}></Counter>
    </div>
  );
}

export default App;
