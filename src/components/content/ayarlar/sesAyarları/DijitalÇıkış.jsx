import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function DijitalÇıkış() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar / Ses Ayarları / Dijital Çıkış</p>
      <Box className="container">
        <h1>Dijital Çıkış</h1>
        <ol>
          <li>
            Ses menüsünden <b>Dijital Çıkış</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Otomatik</b>, <b>Direkt Geçiş</b>, <b>PCM</b>, <b>Dolby Digital Plus</b> veya <b>Dolby Digital</b>'i
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
