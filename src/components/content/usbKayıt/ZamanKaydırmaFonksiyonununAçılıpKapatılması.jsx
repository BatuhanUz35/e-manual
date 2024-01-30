import React from "react";
import "../style.css";
import { ol } from "./ZamanKaydırmaFonksiyonununAçılıpKapatılması_";
import { Box } from "@mui/material";

export default function ZamanKaydırmaFonksiyonununAçılıpKapatılması() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Zaman Kaydırma Fonksiyonunun Açılıp Kapatılması</p>
      <Box className="container">
        <h1>Zaman Kaydırma Fonksiyonunun Açılıp Kapatılması</h1>
        <p classname="text">Bu özellik ile zaman kaydırmayı kapatabilir veya açabilirsiniz.</p>
        <ol>
        {ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
      </Box>
    </Box>
  );
}
