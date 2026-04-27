import { useState } from "react";

// const Counter = ({ counter }) => {
//   return <p>Counter {counter}</p>;
// };

const Counter = ({ counter }) => <p>Counter: {counter}</p>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const updateCounter = (count) => {
    setCounter(counter + count);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <h3>Counter with useState</h3>
      <Counter counter={counter} />
      <button onClick={increaseCounter}>+</button>
      <button onClick={() => updateCounter(-1)}>-</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={() => updateCounter(10)}>+10</button>
      <button onClick={() => updateCounter(-10)}>-10</button>
    </div>
  );
};

export default App;
