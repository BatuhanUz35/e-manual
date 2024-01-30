import React from "react";
import "../../style.css";
import home from "../../../../assets/images/icons/home.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function KanalDüzenleyici() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Düzenleyici
        Uygulamasını Başlatma
      </p>
      <Box className="container">
        <h1>Kanal Düzenleyici Uygulamasını Başlatma</h1>
        <ol>
          <li>
          <img src={home} alt="home" className="inline-icon"/> düğmesine basın.
          </li>
          <li>
            <b>Uygulamalar</b> sekmesinden <b>Kanal Düzenleyici</b> uygulamasını seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box><ArrowForwardIcon className="inline-icon xs"/> <b>Kanal Düzenleyici</b> menüsü görüntülenir.</Box>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>İlave işemler aşağıdaki bölümlerde açıklanmıştır.</li>
        </ul>
        <h2>img gelcek</h2>
      </Box>
    </Box>
  );
}
