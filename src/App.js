import React from "react";
import "./styles.css";
import biubiubiu from "./img/biubiubiu.gif";

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div class="container" onselectstart="return false;" unselectable="on">
        <img src={biubiubiu} alt="" ondragstart="return false;" />
      </div>
    </div>
  );
}
