import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./ManuelTarihVeSaatAyarı_";

export default function ManuelTarihVeSaatAyarı() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Tarih ve Saat Ayarları / Manuel Tarih ve Saat Ayarı
      </p>
      <Box className="container">
        <h1>Manuel Tarih ve Saat Ayarı</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
