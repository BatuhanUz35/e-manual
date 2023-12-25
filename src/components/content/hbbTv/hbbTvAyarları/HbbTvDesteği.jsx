import React from "react";
import "../../style.css";
import { texts, ol } from "./HbbTvDesteği_";

export default function HbbTvDesteği() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Desteği</p>
      <div className="container">
        <h1>HBBTV Desteği</h1>
        {texts.map((text) => {
          return ( 
            <p>{text}</p>
          )})}
          <ol>
          {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}  
          </ol>
      </div>
    </div>
  );
}
