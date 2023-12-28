import React from "react";
import "../../style.css";
import { texts, ol } from "./İzlemeSiteleriniEngelle_";

export default function İzlemeSiteleriniEngelle() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları / İzleme Sitelerini Engelle</p>
      <div className="container">
        <h1>İzleme Sitelerini Engelle</h1>
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
