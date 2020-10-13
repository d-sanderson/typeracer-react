import React, { useState, createRef, useEffect } from "react";
import "./App.css";

import Input from "./components/Input";
function App() {
  const [sample] = useState(
    "Give me reasons we should be complete. You should be with him, I can't compete. You looked at me like I was someone else, oh well, can't you see? I don't wanna slow dance in the dark."
  );
  const [progress, setProgress] = useState(0)
  const myRef = createRef();
  const [input, setInput] = useState("");
  return (
    <div>
      <h1 ref={myRef}>{sample}</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Type of the above text here when the racer begins"
        value={input}
        onChange={(e) => {
          // TODO:
          // 1) track last match
          // 2) text highlighting for last match
          // 3) progress bar
          // 4)
          setInput(e.target.value);
          let match = sample.match(input);
          if (match !== null) {
            let remaining = sample.slice(match[0].length + 1, sample.length);

            let currentProgress = Math.round(match[0]?.length / sample.length * 100);
            setProgress(currentProgress);
            myRef.current.innerHTML =
              `<span class='red'>${e.target.value}</span>` + remaining;
          } else {
            myRef.current.textContent = sample;
          }
        }}
      ></textarea>
      {progress}%
      
    </div>
  );
}

export default App;
