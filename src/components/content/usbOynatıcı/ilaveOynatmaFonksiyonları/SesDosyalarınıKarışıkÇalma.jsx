import React from "react";
import "../../style.css";
import { ol, not } from "./SesDosyalarınıKarışıkÇalma_";
import { Box } from "@mui/material";

export default function SesDosyalarınıKarışıkÇalma() {

  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Ses Dosyalarını Karışık Çalma
      </p>
      <Box className="container">
        <h1>Ses Dosyalarını Karışık Çalma</h1>
        <p>Harici veri ortamında bulunan ses dosyalarını karışık oynatabilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
        {not.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
