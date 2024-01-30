import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import back from "../../../../assets/images/icons/back.png";
import { Box } from "@mui/material";

export default function SistemSesleri() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Ses Ayarları / Sistem Sesleri</p>
      <Box className="container">
        <h1>Sistem Sesleri</h1>
        <ol>
          <li>
            <b>Sistem Sesleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesiyle 
            <b> Açık</b> veya <b>Kapalı</b> konumu seçin.
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
