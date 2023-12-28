import React from "react";
import "../style.css";
import { ol1, ol2, texts } from "./NormalTekstModu_";

export default function TopTekstVeyaFlofTekstModu() {
  return (
    <div className="page">
      <p>Anasayfa / Teleteks / Normal Tekst Modu</p>
      <div className="container">
        <h1>Normal Tekst Modu</h1>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Bir alt sayfayı doğrudan çağırma</h2>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
        <ol>
        {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
