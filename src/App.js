import React from "react";
import Counter from "./conponents/Counter";
import ClassCounter from "./conponents/ClassCounter";

import "./styles/App.css";


function App() {
  return (
    <div className = "App">
      <Counter />
      <br />
      <ClassCounter />
  
    </div>
  );
}

export default App;
