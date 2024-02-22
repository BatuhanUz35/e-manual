import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import sound_direction from "../../../assets/images/icons/sound_direction.png"

export default function SesSeviyesiniAyarlama() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Ses Seviyesini Ayarlama</p>
      <Box className="container">
        <h1>Ses Seviyesini Ayarlama</h1>
        <ol>
          <li>
            <img src={sound_direction} alt="Ses Yön Tuşu" className="inline-icon" /> düğmesiyle ses seviyesini ayarlayın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

