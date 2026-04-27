import { useState } from 'react'

const App = () => {
  const [yesCounter, setYes] = useState(0);
  const [noCounter, setNo] = useState(0);
  const increaseYes = () => {
    setYes(yesCounter + 1);
  }
  const increaseNo = () => {
    setNo(noCounter+1);
  }
  
  return (
    <div>
      <h2>Recommendation App</h2>
        <p>Do you recommend...</p>
        <button onClick={increaseYes}>Yes</button>
        <div>{yesCounter}</div>
        <button onClick={increaseNo}>No</button>
        <div>{noCounter}</div>
    </div>
  );
};

export default App;
