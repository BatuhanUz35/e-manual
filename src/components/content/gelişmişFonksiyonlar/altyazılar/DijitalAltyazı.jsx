import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import back from "../../../../assets/images/png/back.png";
import { Circle } from "@mui/icons-material";

export default function DijitalAltyazı() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar / Dijital Altyazı</p>
      <div className="container">
        <h1>Dijital Altyazı</h1>
        <ol>
          <li>
            <b>Altyazı</b> menüsünden <b>Dijital Altyazı</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Açık</b> veya <b>Kapalı</b> seçimini yapıp <Circle className="inline-icon button"/> düğmesine basın.
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

