import React from "react";
import "../../style.css";
import { ol } from "./SesDosyalarınıEkranKapalıÇalma_";
import { Box } from "@mui/material";

export default function SesDosyalarınıEkranKapalıÇalma() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Ses Dosyalarını Ekran Kapalı Çalma
      </p>
      <Box className="container">
        <h1>Ses Dosyalarını Ekran Kapalı Çalma</h1>
        <p>Harici veri ortamında bulunan ses dosyalarını oynatırken ekranı kapatabilirsiniz.</p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
