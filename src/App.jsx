import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const message = count >= 10 ? "TOO HIGH 🔥" : count < 0 ? "too low 🧊" : "";

  return (
      <div style={{ padding: 20 }}>
          <h1>Counter</h1>
          <p>Count is: {count}</p>

          <button onClick={() => setCount(prev => prev + 1)}>
              Increment
          </button>

          <button onClick={() => setCount(prev => prev - 1)}>
              Decrement
          </button>


          <button onClick={() => setCount(0)}>
              RESET ALL
          </button>
          <p>{message}</p>
          <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          <button onClick={() => setCount(Number(inputValue))}>Set Count</button>
      </div>
  );
}