import React from "react";
import "../style.css";
import { ul } from "./TelevizyonProgramlarınınKaydedilmesiVeOynatılması_";

export default function TelevizyonProgramlarınınKaydedilmesiVeOynatılması() {
  return (
    <div className="page">
      <p>Anasayfa / USB Kayıt / Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler</p>
      <div className="container">
        <h1>Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler</h1>
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}
