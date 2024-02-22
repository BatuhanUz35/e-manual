import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import { Box } from "@mui/material";
import { ol } from "./ÇalışmaŞekli_"

export default function ÇalışmaŞekli() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / Çalışma Şekli</p>
      <Box className="container">
        <h1>Çalışma Şekli</h1>
        <h2>Not:</h2>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TKGS çalışma şekli <b>Otomatik</b> seçilirse <b>Kanal Yeri Değiştirme</b>, <b>Kanal Taşıma</b> ve 
            <b> Kanal Düzenleme</b> etkin değildir. Kanalları düzenleyebilmek için <b>Esnek</b> veya <b>TKGs Kapalı</b> seçimini yapın.
          </li>
        </ul>
        <ol start={ol.length+1}>
        <li>
            Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

