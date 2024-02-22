import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./KanallarıSeçme_";


export default function KanallarıSeçme() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Kanalları Seçme</p>
      <Box className="container">
        <h1>Kanalları Seçme</h1>
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

