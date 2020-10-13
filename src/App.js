import React, { useState, createRef, useEffect } from "react";
import "./App.css"
import Input from "./components/Input";
function App() {
  const [sample, setSample] = useState(
    "Give me reasons we should be complete. You should be with him, I can't compete. You looked at me like I was someone else, oh well, can't you see? I don't wanna slow dance in the dark."
  );
  const myRef = createRef();

  const [input, setInput] = useState("");
  return (
    <div>
      <h1 ref={myRef}>{sample}</h1>
      <input
        type="text"
        placeholder="Type of the above text here when the racer begins"
        value={input}
        onChange={({ target }) => {
          setInput(target.value);
          let match = sample.match(input)
          if(match !== null) {
            let remaining = sample.slice(match[0].length, sample.length)
            myRef.current.innerHTML = `<span class='red'>${match}</span>` + remaining
          }
          else {
            myRef.current.textContent = sample
          }
        }}
      />
    </div>
  );
}

export default App;
