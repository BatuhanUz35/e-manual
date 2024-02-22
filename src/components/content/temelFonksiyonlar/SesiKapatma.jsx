import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import sound_direction from "../../../assets/images/icons/sound_direction.png"

export default function SesiKapatma() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Sesi Kapatma (Mute)</p>
      <Box className="container">
        <h1>Sesi Kapatma (Mute)</h1>
        <ol>
          <li>
            <img src={sound_direction} alt="Ses Yön Tuşu" className="inline-icon" /> düğmesine dik eksende basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}

