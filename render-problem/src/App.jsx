import { refresh } from "./main";

const App = ({ counter }) => {
  const handleIncrease = () => {
    refresh();
  };

  return (
    <div>
      <h3>Render Problem</h3>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default App;
