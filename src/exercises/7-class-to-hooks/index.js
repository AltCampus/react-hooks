import React, { useState } from "react"
import Countdown from "./Countdown"
import "./index.css"

const App = () => {
  const [startTime, setStartTime] = useState(30)

  return (
    <div>
      <label>
        set the timer
        <br />
        <input
          type="range"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
      </label>
      <Countdown startTime={startTime} />
    </div>
  )
}

export default App
