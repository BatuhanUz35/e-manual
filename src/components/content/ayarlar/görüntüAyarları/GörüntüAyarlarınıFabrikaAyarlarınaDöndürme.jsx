import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./GörüntüAyarlarınıFabrikaAyarlarınaDöndürme_";

export default function GörüntüAyarlarınıFabrikaAyarlarınaDöndürme() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Görüntü Ayarları / Görüntü Ayarlarını Fabrika Ayarlarına Döndürme</p>
      <Box className="container">
        <h1>Görüntü Ayarlarını Fabrika Ayarlarına Döndürme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
