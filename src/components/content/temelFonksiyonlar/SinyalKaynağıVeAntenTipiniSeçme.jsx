import React from "react";
import "../style.css";
import options from "../../../assets/images/png/options.png"
import entries from "../../../assets/images/png/entries.png"
import { Circle } from "@mui/icons-material";


export default function SinyalKaynağıVeAntenTipiniSeçme() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Sinyal Kaynağı ve Anten Tipini Seçme</p>
      <div className="container">
        <h1>Sinyal Kaynağı ve Anten Tipini Seçme</h1>
        <p>
          Üç farklı yöntem ile seçim yapabilirsiniz.
        </p>
        <ol>
          <li>
            <img src={entries} alt="girişler" className="inline-icon"/> düğmesine basın ve sinyal kaynağını veya
            anten tipini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            TV modunda <img src={options} alt="seçenekler" className="inline-icon"/> düğmesine basın, <b>Kaynak</b>
            {" "} seçeneğine <Circle className="inline-icon button"/> düğmesiyle onaylayıp sinyal kaynağını veya 
            anten tipini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Home</b> menüsünden <img src={entries} alt="girişler" className="inline-icon"/> <b>Girişler</b>'i seçip
            {" "}<Circle className="inline-icon button"/> düğmesine basın. Sinyal kaynağını veya anten tipini seçip
            {" "}<Circle className="inline-icon button"/> düğmesine basın
          </li>
        </ol>
      </div>
    </div>
  );
}

