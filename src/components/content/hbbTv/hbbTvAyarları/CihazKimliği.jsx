import React from "react";
import "../../style.css";
import { texts, ol } from "./CihazKimliği_";

export default function CihazKimliği() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları / Cihaz Kimliği</p>
      <div className="container">
        <h1>Cihaz Kimliği</h1>
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
