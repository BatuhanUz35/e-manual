import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SesAyarlarınıFabrikaAyarlarınaDöndürme_";

export default function SesAyarlarınıFabrikaAyarlarınaDöndürme() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Ses Ayarlarını Fabrika Ayarlarına Döndürme</p>
      <Box className="container">
        <h1>Ses Ayarlarını FabrikaAyarlarına Döndürme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
