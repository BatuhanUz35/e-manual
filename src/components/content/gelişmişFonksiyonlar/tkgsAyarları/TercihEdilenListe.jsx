import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./TercihEdilenListe_"

export default function TercihEdilenListe() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / Tercih Edilen Liste</p>
      <Box className="container">
        <h1>Tercih Edilen Liste</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

