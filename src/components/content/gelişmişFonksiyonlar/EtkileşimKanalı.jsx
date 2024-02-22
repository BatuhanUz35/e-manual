import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./EtkileşimKanalı_"

export default function EtkileşimKanalı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Etkileşim Kanalı</p>
      <Box className="container">
        <h1>Etkileşim Kanalı</h1>
        <p>
          Etkileşim kanalı özelliğini açın veya kapatın.
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

