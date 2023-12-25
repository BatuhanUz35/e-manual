import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import back from "../../../../assets/images/png/back.png";
import down from "../../../../assets/images/png/down.png";

export default function ÇalışmaŞekli() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / Çalışma Şekli</p>
      <div className="container">
        <h1>Çalışma Şekli</h1>
        <h2>Not:</h2>
        <ol>
          <li>
            <b>TKGS Ayarı</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Çalışma Şekli</b>'ni seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Otomatik</b>, <b>Esnek</b> veya <b>TKGS Kapalı</b> seçimini yapıp <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TKGS çalışma şekli <b>Otomatik</b> seçilirse <b>Kanal Yeri Değiştirme</b>, <b>Kanal Taşıma</b> ve 
            <b> Kanal Düzenleme</b> etkin değildir. Kanalları düzenleyebilmek için <b>Esnek</b> veya <b>TKGs Kapalı</b> seçimini yapın.
          </li>
        </ul>
        <ol start="3">
        <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

