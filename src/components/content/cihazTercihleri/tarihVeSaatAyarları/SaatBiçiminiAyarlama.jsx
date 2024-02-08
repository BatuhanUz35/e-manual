import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SaatBiçiminiAyarlama_";

export default function SaatBiçiminiAyarlama() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Tarih ve Saat Ayarları / Saat Biçimini Ayarlama
      </p>
      <Box className="container">
        <h1>Saat Biçimini Ayarlama</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
