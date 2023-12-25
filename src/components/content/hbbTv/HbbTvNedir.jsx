import React from "react";
import "../style.css";
import {texts} from "./HbbTvNedir_"

export default function HbbTvNedir() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HbbTV Nedir?</p>
      <div className="container">
        <h1>HbbTV Nedir?</h1>
        {texts.map((text) => {
          return ( 
            <p>{text}</p>
          )})}
        <h2>img gelcek</h2>
      </div>
    </div>
  );
}
