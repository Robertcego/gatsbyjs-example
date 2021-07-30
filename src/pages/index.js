import * as React from "react";
import { useState } from "react";

// markup
const IndexPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello World!</h1>
      <button
        type="button"
        onClick={() => (counter > 0 ? setCounter(counter - 1) : counter)}
      >
        Decrement
      </button>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default IndexPage;
