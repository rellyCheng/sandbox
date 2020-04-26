import React from "react";
import "./styles.css";
import biubiubiu from "./img/biubiubiu.gif";

export default function App() {
  return (
    <div className="App">
      <h1>Hello qiuting</h1>
      <h2>nice too meet you.</h2>

      <div class="container" onselectstart="return false;" unselectable="on">
        <div class="body_left">
          <img src={biubiubiu} alt="" ondragstart="return false;" />
        </div>

        <div class="body_center love">
          <div class="block">
            <div class="div1" />
            <div class="div2" />
            <div class="div3" />
            <div class="div4" />
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="border">
          <div class="border-top" />
          <div class="border-bottom" />
        </div>
      </div>
    </div>
  );
}
