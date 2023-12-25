import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import back from "../../../../assets/images/png/back.png";

export default function DijitalTeleteksDili() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi / Dijital Teleteks Dili</p>
      <div className="container">
        <h1>Dijital Teleteks Dili</h1>
        <ol>
          <li>
            <b>Teleteks</b> menüsünden <b>Dijital Teleteks Dili</b>'ni seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
          </li>
          <li>
            <b>Dijital Teleteks Dili</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın. 
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

