import React, { useState, createRef, useEffect } from "react";
import { useRandomQuote } from "./hooks/useRandomQuote";
import "./App.css";
import "@jh3y/ep/";
import Input from "./components/Input";
function App() {
  const { data, currentQuote } = useRandomQuote();
  const [sample, setSample] = useState(
    "Give me reasons we should be complete. You should be with him, I can't compete. You looked at me like I was someone else, oh well, can't you see? I don't wanna slow dance in the dark."
  );
  const [progress, setProgress] = useState(0);
  const myRef = createRef();
  const [input, setInput] = useState("");
  const [lastMatch, setLastMatch] = useState("");

  useEffect(() => {
    setSample(currentQuote);
    if(progress > "97") {
      setProgress('complete')
    }
    return () => {};
  }, [currentQuote]);
  return (
    <div>
      <h1 ref={myRef}>{sample}</h1>
      <input
      className="display"
        style={{ width: "100%", height: "50px", fontSize: "1.5rem" }}
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
            setLastMatch(match[0]);
            let remaining = sample.slice(match[0].length + 1, sample.length);
            let currentProgress = Math.round(
              (e.target.value.length / sample.length) * 100
            );
            setProgress(currentProgress);
            myRef.current.innerHTML =
              `<span class='green'>${e.target.value}</span>` + remaining;
          } else {
            myRef.current.innerHTML =
              `<span class='red'>${
                lastMatch + sample.slice(lastMatch.length, input.length)
              }</span>` + sample.slice(input.length, sample.length);
          }
        }}
      />
      {progress}%<progress value={progress} max="100"></progress>
      {progress == 100 && "COMPLETE"}
    </div>
  );
}

export default App;
