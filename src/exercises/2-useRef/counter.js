/*
- Create a counter that changes the value every second.
- when you click on stop button it stops and the innerText of button chnages to start
- when you click on start again it starts the count from that value again.

*/

import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={count => setCount(count + 1)}>Stop</button>
    </div>
  );
}
