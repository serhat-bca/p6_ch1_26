import React from "react";

const App = () => {
  const releaseYear = 2013;
  const company = "Facebook, Inc.";
  console.log("Release year: ", releaseYear);
  console.log(`React was developed by ${company}`);

  return (
    <div>
      <h2>About React</h2>
      <p>
        React was developed by {company}
        and was first released in {releaseYear},
        {new Date().getFullYear() - releaseYear}
        years ago.
      </p>
    </div>
  );
};

export default App;
