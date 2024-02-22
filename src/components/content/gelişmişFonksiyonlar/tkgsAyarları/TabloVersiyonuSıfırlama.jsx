import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./TabloVersiyonuSıfırlama_"

export default function TabloVersiyonuSıfırlama() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / Tablo Versiyonu Sıfırlama</p>
      <Box className="container">
        <h1>Tablo Versiyonu Sıfırlama</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

