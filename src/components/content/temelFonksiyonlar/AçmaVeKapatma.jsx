import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./AçmaVeKapatma_";

export default function SesAyarları() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Açma ve Kapatma</p>
      <Box className="container">
        <h1>Açma ve Kapatma</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
