import React from "react";
import "../../style.css";
import { ol } from "./TümDosyaFormatındaBilgileriGörüntüleme_";
import { Box } from "@mui/material";

export default function TümDosyaFormatındaBilgileriGörüntüleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Tüm Dosya Formatında Bilgileri Görüntüleme
      </p>
      <Box className="container">
        <h1>Tüm Dosya Formatında Bilgileri Görüntüleme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
