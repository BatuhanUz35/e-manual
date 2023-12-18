import React from "react";
import "./style.css";
import tv from "../../assets/images/png/tv.png";

export default function Anasayfa() {
  return (
    <div className="page">
      <p>Anasayfa</p>
      <div className="container">
        <h1>Televizyon </h1>
        <h1>B55 C 985 B</h1>
        <img src={tv} alt="tv"></img>
      </div>
    </div>
  );
}
