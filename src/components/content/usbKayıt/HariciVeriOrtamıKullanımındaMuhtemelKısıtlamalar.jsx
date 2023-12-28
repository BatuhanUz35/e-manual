import React from "react";
import "../style.css";
import { ul } from "./HariciVeriOrtamıKullanımındaMuhtemelKısıtlamalar_";

export default function HariciVeriOrtamıKullanımındaMuhtemelKısıtlamalar() {
  return (
    <div className="page">
      <p>Anasayfa / USB Kayıt / Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar</p>
      <div className="container">
        <h1>Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar</h1>
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
