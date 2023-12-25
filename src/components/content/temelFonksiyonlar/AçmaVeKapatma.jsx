import React from "react";
import "../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";


export default function SesAyarları() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Açma ve Kapatma</p>
      <div className="container">
        <h1>Açma ve Kapatma</h1>
        <ol>
          <li>
            Televizyonu bekleme konumundan açmak için <PowerSettingsNewIcon className="inline-icon"/> 
            {" "}düğmesine basın.
          </li>
          <li>
            Televizyonu bekleme konumuna almak için <PowerSettingsNewIcon className="inline-icon"/>
            {" "}düğmesine basın
          </li>
        </ol>
      </div>
    </div>
  );
}
