import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KapanmaZamanlayıcısı_";

export default function KapanmaZamanlayıcısı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Kapanma Zamanlayıcısı</p>
      <Box className="container">
        <h1>Kapanma Zamanlayıcısı</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

