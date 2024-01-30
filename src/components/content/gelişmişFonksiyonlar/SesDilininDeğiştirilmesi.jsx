import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function SesDilininDeğiştirilmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Ses Dilinin Değiştirilmesi</p>
      <Box className="container">
        <h1>Ses Dilinin Değiştirilmesi</h1>
        <p classname="text">
          (yalnızca dijital televizyon kanalları için)
        </p>
        <p classname="text">
          Birincil ve ikincil bir ses dili tanımlayabilirsiniz.
        </p>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Seslendirme Dili</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Ses dilini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>İkinci Seslendirme Dili</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            İkincil ses dilini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

