import React from "react";
import Banner from "../Banner";
import Row from "../Row";
import "../App.css";

function home() {
  return (
    <div>
      <Banner />
      <Row />
      <div class="card-holder">
        <div class="card bg-germany">Listen To Music</div>
      </div>
    </div>
  );
}

export default home;
