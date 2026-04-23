import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const updateCounter = (count) => {
    setCounter(counter + count);
  };

  return (
    <div>
      <h3>Counter with useState</h3>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>+</button>
      <button>-</button>
      <button>reset</button>
      <button onClick={() => updateCounter(10)}>+10</button>
      <button>-10</button>
    </div>
  );
};

export default App;
