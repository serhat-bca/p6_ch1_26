import { useState } from "react";

const App = () => {
  const [recs, setRecs] = useState({ yes: 0, no: 0 });
  const [recHistory, setHistory] = useState([]);

  console.log("RecHistory:", recHistory);

  const increaseYes = () => {
    // spread operator for objects
    setRecs({ ...recs, yes: recs.yes + 1 });
    setHistory([...recHistory, "Y"]);
    console.log("RecHistory:", recHistory);
  };
  const increaseNo = () => {
    setRecs({ ...recs, no: recs.no + 1 });
    // setHistory([...recHistory, "N"]);
    // creating another array without mutating the original
    setHistory(recHistory.concat("N"));
    console.log("RecHistory:", recHistory);
  };

  return (
    <div>
      <h2>Recommendation App</h2>
      <p>Do you recommend...</p>
      <button onClick={increaseYes}>Yes</button>
      <div>{recs.yes}</div>
      <button onClick={increaseNo}>No</button>
      <div>{recs.no}</div>
      {/* if statement ? run if true : run if false */}
      {/* ternary operator */}
      {/* conditional rendering */}
      {recHistory.length == 0 ? (
        <p>No Rec Yet</p>
      ) : (
        <p>History of Recommendations: {recHistory}</p>
      )}
      {/* short circuit
      &&  */}
      {recs.yes === recs.no && <p>Yes and No Recs are equal</p>}
    </div>
  );
};

export default App;
