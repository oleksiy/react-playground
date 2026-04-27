import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  let statusMsg = "";
  if (count >= 10) {
    statusMsg = "TOO HIGH 🔥";
  } else if (count < 0) {
    statusMsg = "too low 🧊";
  }


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
        {statusMsg && <p>{statusMsg}</p>}
      </div>
  );
}