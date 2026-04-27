import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  let show = false;
  let showlow = false;
  if (count >= 10) {
    show = true;
    showlow = false;
  }

  if (count < 0){
    showlow = true;
    show = false;
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
        {show && <p>TOO HIGH 🔥</p>}
        {showlow && <p>too low 🥶</p>}
      </div>
  );
}