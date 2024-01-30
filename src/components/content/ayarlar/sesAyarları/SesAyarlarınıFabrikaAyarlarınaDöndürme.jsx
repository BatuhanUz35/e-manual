import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function SesAyarlarınıFabrikaAyarlarınaDöndürme() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Ses Ayarları / Ses Ayarlarını Fabrika Ayarlarına Döndürme</p>
      <Box className="container">
        <h1>Ses Ayarlarını FabrikaAyarlarına Döndürme</h1>
        <ol>
          <li>
            <b>Ses</b> menüsünden yapılan değişiklikleri sıfırlamak için <b>Varsayılana Sıfırla</b>'yı 
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Sıfırlamayı onaylamak için <b>Evet</b>'i veya işlemi iptal etmek için <b>Hayır</b>'ı
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne dönmek
            için <img src={home} alt="home" className="inline-icon"/> veya TV yayınına dönmek için
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
