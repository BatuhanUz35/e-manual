import React from "react";
import "../style.css";
import {ol} from "./VideoDizinleri_"

export default function HbbTvKullanımı() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / Video Dizinleri İçin Ek Fonksiyonlar</p>
      <div className="container">
        <h1>Video Dizinleri İçin Ek Fonksiyonlar</h1>
        <ol>
        {ol.map((text) => {
          return ( 
            <li>{text}</li>
          )})}
        </ol>
      </div>
    </div>
  );
}
