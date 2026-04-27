import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
      <div style={{ padding: 20 }}>
        <h1>Counter</h1>

        <p>Count is: {count}</p>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          RESET ALL
        </button>
      </div>
  );
}