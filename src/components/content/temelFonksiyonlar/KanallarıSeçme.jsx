import React from "react";
import "../style.css";
import one from "../../../assets/images/png/one.png"
import zero from "../../../assets/images/png/zero.png"
import { Circle } from "@mui/icons-material";


export default function KanallarıSeçme() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Kanalları Seçme</p>
      <div className="container">
        <h1>Kanalları Seçme</h1>
        <p>
          Üç farklı yöntem ile seçim yapabilirsiniz.
        </p>
        <ol>
          <li>
            Kanalları doğrudan seçmek için <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/>
            {" "} düğmelerine basın.
          </li>
          <li>
            Kanalları adım adım seçmek için <h2>img gelcek</h2> düğmelerine basın.
          </li>
          <li>
            TV modunda <Circle className="inline-icon button"/> düğmesine basın. <b>Kanal Listesi - Tüm Kanallar</b>
            menüsünden kanal seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

