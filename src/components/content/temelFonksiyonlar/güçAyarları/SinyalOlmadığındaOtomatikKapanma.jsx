import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SinyalOlmadığındaOtomatikKapanma_";

export default function SinyalOlmadığındaOtomatikKapanma() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Sinyal Olmadığında Otomatik Kapanma</p>
      <Box className="container">
        <h1>Sinyal Olmadığında Otomatik Kapanma</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

