import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function VarsayılanKanal() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Varsayılan Kanal</p>
      <Box className="container">
        <h1>Varsayılan Kanal</h1>
        <p classname="text">
          TV'nin açılacağı varsayılan kanalı seçin.
        </p>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Varsayılan Kanal</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Mode Seç</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Son Durum</b> veya <b>Kullanıcı Tercihi</b>'ni seçin.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>Kullanıcının Seçimi</b> seçildiğinde <b>Kanlları Göster</b>'den varsayılan kanal seçimi yapılması gerekmektedir.
          </li>
        </ul>
      </Box>
    </Box>
  );
}

