import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import back from "../../../assets/images/png/back.png";
import { Circle } from "@mui/icons-material";

export default function MhegPinKoruması() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / MHEG PIN Koruması</p>
      <div className="container">
        <h1>MHEG PIN Koruması</h1>
        <p>
          Etkileşimli MHEG uygulamalarında PIN korumasını aktif edin.
        </p>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>MHEG PIN Koruması</b>'nı seçin.
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

