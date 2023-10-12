import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./Components/Info.js";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState></ButtonState>
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const UpdateTitleClicked = () => {
    //create function for button click
    setTitle("We now have a Title");
  };
  const UpdateCountClicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Title:{title}</p>
      <p>Counter:{count}</p>
      <button onClick={UpdateTitleClicked}>Update Title</button>
      <button onClick={UpdateCountClicked}>Update Count</button>
    </div>
  );
}
export default App;
