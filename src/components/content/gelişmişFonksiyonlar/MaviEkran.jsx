import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import back from "../../../assets/images/png/back.png";
import { Circle } from "@mui/icons-material";

export default function MaviEkran() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Mavi Ekran</p>
      <div className="container">
        <h1>Mavi Ekran</h1>
        <p>
          Herhangi bir TV yayın sinyali olmadığında ekran rengini mavi seçebilirsiniz.
        </p>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Sesiz Mavi ekran</b>'ı seçin.
          </li>
          <li>
            <Circle className="inline-icon button"/> düğmesiyle <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

