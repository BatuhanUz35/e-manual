import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import options from "../../../assets/images/icons/options.png";
import home from "../../../assets/images/icons/home.png"
import back from "../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ResimModu() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Resim Modu</p>
      <Box className="container">
        <h1>Resim Modu</h1>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="Seçenekler" className="inline-icon"/>
            düğmesine basın.
          </li>
          <li>
            <b>Resim</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Resim Modu</b>'nu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Resim modu tipini seçip <Circle className="inline-icon button"/> düğmesine basın.
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

