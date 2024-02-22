import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DijitalTeleteksDili_"

export default function DijitalTeleteksDili() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi / Dijital Teleteks Dili</p>
      <Box className="container">
        <h1>Dijital Teleteks Dili</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

