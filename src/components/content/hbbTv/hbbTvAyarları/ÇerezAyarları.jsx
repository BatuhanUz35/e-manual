import React from "react";
import "../../style.css";
import { ol, texts } from "./ÇerezAyarları_";

export default function ÇerezAyarları() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları / Çerez Ayarları</p>
      <div className="container">
        <h1>Çerez Ayarları</h1>
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
