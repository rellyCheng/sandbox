import React from "react";
import "./styles.css";
import biubiubiu from "./img/biubiubiu.gif";

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div onselectstart="return false;" unselectable="on">
        <img src={biubiubiu} alt="111" ondragstart="return false;" />
      </div>
    </div>
  );
}
