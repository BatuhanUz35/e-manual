import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./GörüntüyüKapatma_";

export default function GörüntüyüKapatma() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Görüntüyü Kapatma</p>
      <Box className="container">
        <h1>Görüntüyü Kapatma</h1>
        <p>
          Televizyonu stand-by moduna almadan sadece görüntüyü kapatabilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

