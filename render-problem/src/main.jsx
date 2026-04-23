import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

let counter = 0;

root.render(<App counter={counter} />);

export const refresh = () => {
  counter++;
  root.render(<App counter={counter} />);
};
