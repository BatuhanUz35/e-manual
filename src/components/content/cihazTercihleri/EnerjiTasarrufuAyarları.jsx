import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./EnerjiTasarrufuAyarları_";

export default function EnerjiTasarrufuAyarları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Enerji Tasarrufu Ayarları
      </p>
      <Box className="container">
        <h1>Enerji Tasarrufu Ayarları</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
