import React from "react";
import "../../style.css";
import { ol, texts } from "./İzlemeTercihi_";

export default function İzlemeTercihi() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları / İzleme Tercihi</p>
      <div className="container">
        <h1>İzleme Tercihi</h1>
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
