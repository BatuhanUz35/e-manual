import React from "react";
import "../../style.css";
import { ol, texts } from "./KalıcıDepolama_";

export default function KalıcıDepolama() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları / Kalıcı Depolama</p>
      <div className="container">
        <h1>Kalıcı Depolama</h1>
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
