import React from "react";

const Message = (props) => {
  return (
    <>
      <h2>Message Components</h2>
      <p>Message: {props.special}</p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <h2>Components in React</h2>
      <Message special="my special message" />
      <Message special="not so special" />
    </div>
  );
};

export default App;
