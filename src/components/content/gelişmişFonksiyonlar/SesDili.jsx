import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import sound_language from "../../../assets/images/icons/sound_language.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function SesDili() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Ses Dili</p>
      <Box className="container">
        <h1>Ses Dili</h1>
        <p classname="text">
          Dijital kanalları seyrederken çeşitli dilleri seçebilirsiniz. Bu, yayınlanan programa bağlıdır.
        </p>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Ses Dili</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Desteklenen ses dilini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Televizyon modunda kumanda üzerinde bulunan <img src={sound_language} alt="Ses dili" className="inline-icon"/>
            {" "} düğmesine basarak <b>Ses Dili</b>'ni değiştirebilirsiniz.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ul>
      </Box>
    </Box>
  );
}

