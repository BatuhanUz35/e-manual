import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./SinyalKaynağıVeAntenTipiniSeçme_";


export default function SinyalKaynağıVeAntenTipiniSeçme() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Sinyal Kaynağı ve Anten Tipini Seçme</p>
      <Box className="container">
        <h1>Sinyal Kaynağı ve Anten Tipini Seçme</h1>
        <p>
          Üç farklı yöntem ile seçim yapabilirsiniz.
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

