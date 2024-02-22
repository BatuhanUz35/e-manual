import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SaatDiliminiAyarlama_";

export default function SaatDiliminiAyarlama() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Tarih ve Saat Ayarları / Saat Dilimini Ayarlama
      </p>
      <Box className="container">
        <h1>Saat Dilimini Ayarlama</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
